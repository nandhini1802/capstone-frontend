//* Get Firstname and lastname from full name
export const splitName = (name) => {
    const nameArray = name?.split(" ");
    let firstName = "";
    let lastName = "";
  
    if (nameArray.length > 1) {
      lastName = nameArray[nameArray.length - 1];
      const firstNameArray = nameArray?.slice(0, nameArray.length - 1);
      firstName = firstNameArray?.join(" ");
    } else {
      firstName = name;
    }
    return { firstName, lastName };
  };