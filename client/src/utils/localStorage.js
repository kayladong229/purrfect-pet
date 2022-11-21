export const getSavedPetIds = () => {
    const savedPetIds = localStorage.getItem('saved_pets')
      ? JSON.parse(localStorage.getItem('saved_pets'))
      : [];
  
    return savedPetIds;
  };
  
  export const savePetIds = (PetIdArr) => {
    if (PetIdArr.length) {
      localStorage.setItem('saved_pets', JSON.stringify(PetIdArr));
    } else {
      localStorage.removeItem('saved_pets');
    }
  };
  
  export const removePetId = (PetId) => {
    const savedPetIds = localStorage.getItem('saved_pets')
      ? JSON.parse(localStorage.getItem('saved_pets'))
      : null;
  
    if (!savedPetIds) {
      return false;
    }
  
    const updatedSavedPetIds = savedPetIds?.filter((savedPetId) => savedPetId !== PetId);
    localStorage.setItem('saved_pets', JSON.stringify(updatedSavedPetIds));
  
    return true;
  };