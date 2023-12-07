const app = Vue.createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            listaMail: [],
        };
    },

    methods: {
        fetchEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.apiUrl)
                    .then((response) => {
                        this.listaMail.push(response.data.response);
                    })
                    .catch((error) => {
                        console.error('Error fetching emails:', error);
                    });
            }
        },
    },

    mounted() {
        this.fetchEmails();
    },
});

app.mount('#app');
