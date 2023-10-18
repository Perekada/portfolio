import React, { useState, useContext } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({children}) => {
     const [isOpen, setIsopen] = useState(false);
	 const [openResume, setOpenResume]= useState(false)

       const openModal = () => {
					setIsopen(true);
				};
				const closeModal = () => {
					setIsopen(false);
				};

				const handleOutsideClick = (e) => {
					if (e.target.className === 'popup-overlay') {
						closeModal();
						closePop();
					}
				};
			const openPop = () => {
				setOpenResume(true)
			}
			const closePop = () => {
				setOpenResume(false)
			}


	return (
		<AppContext.Provider
			value={{isOpen, openModal, closeModal, handleOutsideClick, openResume, openPop, closePop, setOpenResume}}>
			{children}
		</AppContext.Provider>
	);
}


export const useGlobal = () => {
	return useContext(AppContext);
};