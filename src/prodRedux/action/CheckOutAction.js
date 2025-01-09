import { EMAIL, PASSWORD, NAME, LASTNAME, ADRESS, AREA, POSTALCODE,CITY,  SAVE_INFO } from "../action/ActionType";

export const emailID = (emailId) => ({
    type: EMAIL,
    payload: emailId,
});


export const password = (passwrd) => ({
    type:PASSWORD,
    payload: passwrd,
})

export const nameUSer = (name) => ({
    type: NAME,
    payload: name,
  });

  export const last_name = (last_name) => ({
    type: LASTNAME,
    payload: last_name,
  });


export const addressUser = (user_adress) => ({
    type:ADRESS,
    payload: user_adress,
})

export const userLocation_area = (area) => ({
    type:AREA,
    payload: area,
})

export const address_post_code = (postal_code) => ({
    type:POSTALCODE,
    payload: postal_code,
})


export const userCity = (city) => ({
 type: CITY,
 payload: city,
})
export const userInfoeSave = (infoSave) => ({
    type:SAVE_INFO,
    payload: infoSave,
})
