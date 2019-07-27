<template>
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button @click="$emit('close')" type="button" class="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div v-if=" typeof(modalBody) === 'object' ">
                        <user-form :fields="modalBody.fields" :check="check"></user-form>
                    </div>
                    <p v-if=" typeof(modalBody) === 'string' ">{{ modalBody }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="ok">Ok</button>
                    <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userForm from './user-form.vue';
    import axios from 'axios';
    // import localData from '../local-settings.js';

    const domain = localData.api_host || '';
    export default {
        props: {
            modalTitle: String,
            modalBody: {
                type: [Object, String]
            },
            confirm: Function
        },
        components: {
            'user-form': userForm
        },
        name: "modal",
        data : function() {
            return {
                title: this.modalTitle,
                check: Function
            }
        },
        methods: {
            ok: function () {
                if(typeof this.modalBody === 'object'){
                    this.check = this.checkForm;
                }

                if(typeof this.modalBody === 'string'){
                    this.$emit('remove-user');
                }
            },
            checkForm: function (event) {
                if(!event){
                    this.check = Function;
                }

                if(event){
                    console.log(event);
                    let data = {};

                    Object.keys(event).forEach((item) => {
                        data[item] = event[item].value;
                    });

                    if(this.modalBody.id){
                        axios
                            .get(domain + '/user_edit', {
                                params: {
                                    data: data,
                                    id: this.modalBody.id
                                }
                            })
                            .then((response) => {
                                this.$emit('close', response);
                            });
                    } else {
                        console.log(data);
                        axios
                            .post(domain + '/api/users/add', data)
                            .then((response) => {
                                this.$emit('close', response.data);
                            });
                    }



                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal{
        display: block;
        background: rgba(0,0,0,.5);
        .modal-dialog{
            width: 50%;
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>