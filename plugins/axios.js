export default function({store, $axios, redirect, app})
{

    $axios.onRequest(config => {
        store.dispatch('validation/clearErrors')
    })

    $axios.onResponse(response => {
        // if(response.status == 201) {
        //     toast('success', 'check', response.data.message);
        // }
        return Promise.resolve(response)
    })

    $axios.onError(error => {
        
        if(error.response.status == 422) {
            store.dispatch('validation/setErrors', error.response.data.errors)
            toast('error', 'error', "The given data was invalid");
        }
        
        if(!error.response) {
            toast('error', 'network_check', "No network available");
        }
        return Promise.reject(error)
    })

    function toast(type, icon, message) {
        app.$toast.show(message, {
            type: type,
            icon: {
                name: icon,
            }
        })
    }
}
