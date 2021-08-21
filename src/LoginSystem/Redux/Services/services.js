
export const userLogin = {
    login
}

 const login = (formData) => {
    return (dispatch) => {
        axios({
            method: "POST",
            url: "https://developer.clirnet.com/knowledge/rnv11/Authrjs/loginEmail",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then(response => {
              console.log(response.data)
              dispatch(loginsuccess(response.data))
          })
          .catch(error => {
              console.log(error)
              dispatch(loginFaliure(error))
          })
    }
}