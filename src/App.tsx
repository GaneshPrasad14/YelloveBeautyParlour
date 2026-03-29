import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BookingPopup from "@/components/BookingPopup";
import { ScrollToTop } from "@/components/FloatingElements";
import Preloader from "./components/Preloader";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookingProvider } from "./contexts/BookingContext";

const queryClient = new QueryClient();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <TooltipProvider>
          <Preloader onComplete={() => setIsLoaded(true)} />
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Toaster />
              <Sonner />
              <BookingPopup />
              <ScrollToTop />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </motion.div>
          )}
        </TooltipProvider>
      </BookingProvider>
    </QueryClientProvider>
  );
};

export default App;
