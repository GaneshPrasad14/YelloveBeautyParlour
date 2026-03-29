import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
    isOpen: boolean;
    openBooking: (service?: string) => void;
    closeBooking: () => void;
    selectedService: string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const openBooking = (service?: string) => {
        if (service) setSelectedService(service);
        setIsOpen(true);
    };

    const closeBooking = () => {
        setIsOpen(false);
        setSelectedService("");
    };

    return (
        <BookingContext.Provider value={{ isOpen, openBooking, closeBooking, selectedService }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
};
