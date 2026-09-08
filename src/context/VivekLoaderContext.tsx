"use client";

import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { VivekLoader } from "@/components/ui/VivekLoader";

export interface RedirectOptions {
  target?: "_blank" | "_self" | string;
  duration?: number;
}

interface VivekLoaderContextType {
  triggerRedirect: (url: string, options?: RedirectOptions) => void;
  isLoading: boolean;
}

const VivekLoaderContext = createContext<VivekLoaderContextType>({
  triggerRedirect: () => {},
  isLoading: false,
});

export const VivekLoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const targetUrlRef = useRef<string | null>(null);
  const minTimeElapsedRef = useRef(false);
  const routeChangedRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const attemptDismiss = useCallback(() => {
    // Only dismiss loader if BOTH the 1-second minimum timer has passed AND the route has changed (or external link)
    if (minTimeElapsedRef.current && (routeChangedRef.current || !targetUrlRef.current)) {
      setIsLoading(false);
      targetUrlRef.current = null;
      minTimeElapsedRef.current = false;
      routeChangedRef.current = false;
    }
  }, []);

  // Monitor pathname changes
  useEffect(() => {
    if (targetUrlRef.current && isLoading) {
      // Check if current pathname matches target or has changed from starting route
      routeChangedRef.current = true;
      attemptDismiss();
    }
  }, [pathname, isLoading, attemptDismiss]);

  const triggerRedirect = useCallback(
    (url: string, options?: RedirectOptions) => {
      if (!url) return;

      if (timerRef.current) clearTimeout(timerRef.current);

      const target = options?.target;
      const duration = options?.duration || 1000; // 1.0 second minimum duration

      targetUrlRef.current = url;
      minTimeElapsedRef.current = false;
      routeChangedRef.current = false;

      // 1. Show VIVEK Loader overlay immediately
      setIsLoading(true);

      const isExternal =
        url.startsWith("http") ||
        url.startsWith("mailto:") ||
        url.startsWith("tel:") ||
        target === "_blank";

      // 2. Immediately trigger router push at 0ms
      if (isExternal) {
        window.open(url, target || "_blank");
        routeChangedRef.current = true;
      } else if (url.startsWith("#")) {
        window.location.hash = url;
        routeChangedRef.current = true;
      } else {
        router.push(url);
      }

      // 3. Set minimum 1-second display timer
      timerRef.current = setTimeout(() => {
        minTimeElapsedRef.current = true;
        attemptDismiss();
      }, duration);
    },
    [router, attemptDismiss]
  );

  return (
    <VivekLoaderContext.Provider value={{ triggerRedirect, isLoading }}>
      {children}
      <VivekLoader isOpen={isLoading} />
    </VivekLoaderContext.Provider>
  );
};

export const useVivekLoader = () => useContext(VivekLoaderContext);
