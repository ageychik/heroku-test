<template>
    <div>
        <h1>Demo page</h1>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="_key in userList">
                <td>{{ _key.firstName }}</td>
                <td>{{ _key.lastName }}</td>
                <td>{{ _key.username }}</td>
                <td>{{ _key.age }}</td>
                <td>{{ _key.email }}</td>
                <td>
                    <div class="table-icons-box">
                        <span @click="editUser(_key)">
                            <edit-icon class="table-icon"></edit-icon>
                        </span>
                        <span @click="removeUser(_key._id)">
                            <cancel-icon class="table-icon"></cancel-icon>
                        </span>
                    </div>

                </td>
            </tr>

            </tbody>
        </table>

        <button @click="addUser" type="button" class="btn btn-primary add-user">Add new user</button>

        <modal @close="closeModal"
               @remove-user="removeConfirm"
               v-if="showModal"
               :modal-title="modal.modalTitle"
               :modal-body="modal.modalBody"
               :confirm="modal.confirm">
        </modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import cancelIcon from '../elements/icons/cancel-icon.vue';
    import editIcon from '../elements/icons/edit-icon.vue';
    import modal from '../components/modal.vue';
    import localData from '../local-settings.js';

    const domain = localData.api_host || '';
    export default {
        name: "demo",
        data() {
            return {
                userList: null,
                showModal: false,
                activeId: undefined,
                modal : {
                    modalTitle: '',
                    modalBody: undefined,
                    confirm: this.closeModal
                }
            }
        },
        components: {
            modal, cancelIcon, editIcon
        },
        mounted() {
            console.log(this.getUsers())
        },
        methods: {
            getUsers: function(){
                axios
                    .get(domain + '/api/users')
                    .then((response) => {
                        return this.userList = response.data;
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            closeModal : function(data){
                this.showModal = false;
                this.activeId = undefined;
                if(data){
                    this.userList = data.data
                }
            },
            removeUser : function(id){
                this.activeId = id;
                this.showModal = true;
                this.modal.modalTitle = 'Remove user.';
                this.modal.modalBody = 'Are you sure?';
            },
            removeConfirm: function(){
                axios
                    .get('http://localhost:5000/user_delete', {
                        params: {
                            _id : this.activeId
                        }
                    })
                    .then((response) => {
                        this.userList = response.data;
                        this.closeModal();
                    });
            },
            editUser: function(key){
                this.activeId = key._id;
                this.showModal = true;
                this.modal.modalTitle = 'Edit user.';
                this.modal.modalBody = {
                    form: true,
                    edit: true,
                    id: key._id,
                    fields: {
                        firstName: this.getFieldModel({name: 'firstName', value: key.firstName, label: 'First name', required: true}),
                        lastName: this.getFieldModel({name: 'lastName', value: key.lastName, label: 'Last name', required: true}),
                        email: this.getFieldModel({name: 'email', value: key.email, label: 'Mail', type: 'email', required: true}),
                        age: this.getFieldModel({name: 'age', value: key.age, label: 'Age'}),
                        username: this.getFieldModel({name: 'username', value: key.username, label: 'Username'})
                    },
                };
            },
            addUser : function(){
                this.modal.modalTitle = 'Add new user.';
                this.showModal = true;
                this.modal.modalBody = {
                    form: true,
                    edit: true,
                    fields: {
                        firstName: this.getFieldModel({name: 'firstName', label: 'First name', required: true}),
                        lastName: this.getFieldModel({name: 'lastName', label: 'Last name', required: true}),
                        mail: this.getFieldModel({name: 'email', label: 'Mail', type: 'email', required: true, mask: 'email'}),
                        username: this.getFieldModel({name: 'username', label: 'Username'}),
                        age: this.getFieldModel({name: 'age', label: 'Age'})
                    }
                };
            },
            getFieldModel : function (data) {
                return {
                    name: data.name,
                    label: data.label,
                    value: data.value || '',
                    type: data.type || 'text',
                    required: data.required || false,
                    placeholder: data.placeholder || '',
                    mask: data.mask || false,
                    status: ''
                };
            }
        }
    }
</script>

<style scoped>

</style>