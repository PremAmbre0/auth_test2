<template>
    <div>
        <div>
            token:{{ token }}
        </div>
        <div>
            credential :{{ credential }}
        </div>
        <div>
            user:{{ user }}
        </div>
        <div>
            Google Auth
            <div>
                <button @click="signinWithGoogle">
                    sign in with Google
                </button>
                <button @click="signoutFromGoogle">
                    sign out with Google
                </button>
            </div>
        </div>
        <button @click="signinWithFacebook">
            sign in with Facebook
        </button>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters('auth', ['token', 'credential', 'user'])
    },
    methods: {
        ...mapActions('auth', ['signinWithGoogle','signoutFromGoogle', 'signinWithFacebook'])
    }
}
</script>