export default function({store, $axios, redirect})
{
    $axios.onRequest(config => {
        store.dispatch('validation/clearErrors')
    })

    $axios.onResponse(response => {
      
        return Promise.resolve(response)
    })

    $axios.onError(error => {
        
        if(error.response.status == 422) {
            store.dispatch('validation/setErrors', error.response.data.errors)
        }
        return Promise.reject(error)
    })
}