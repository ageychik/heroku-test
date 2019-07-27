<template>
    <form>
        <div class="form-group" v-for="_field in tableFields">
            <label class="row align-items-center form-label">
                <span class="col-3">
                    {{ _field.label }}
                    <span class="field-required" v-if="_field.required">
                        <star-icon></star-icon>
                    </span>
                </span>
                <span class="col-9">
                    <b-form-input
                            :class="{ 'error' : _field.status === 'error', 'correct' : _field.status === 'correct' }"
                            :type="_field.type"
                            :value="_field.value"
                            :placeholder="_field.placeholder"
                            :fieldname="_field.name"
                            v-model="_field.value"
                            @blur="checkField(_field)"
                            @focus="clearStatus(_field)"
                    ></b-form-input>
                </span>
            </label>
        </div>
    </form>
</template>

<script>
    import starIcon from '../elements/icons/star-icon.vue';

    export default {
        props: ['fields', 'check'],
        name: "user-form",
        data() {
            return {
                tableFields: this.fields
            }
        },
        components: {starIcon},
        methods: {
            checkFormValid: function(callback){
                let cur = 0;
                Object.keys(this.fields).forEach((key) => {
                    if(this.fields[key].required){
                        cur += 1;
                        this.fields[key].status = this.fields[key].value.length > 0 ? 'correct' : 'error';
                        cur -= +(this.fields[key].value.length > 0);
                    }
                });

                callback(cur > 0 ? null : this.fields);
            },
            checkField: function(field){
                if(field.required){
                    field.status = (field.value.length > 0) ? 'correct' : 'error';
                }
            },
            clearStatus: function(field){
                field.status = '';
            }
        },
        watch: {
            check : function (newData) {
                this.checkFormValid(newData)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-label{
        font-weight: bold;
    }
    .form-control{
        &.correct{
            border-color: green;
        }
        &.error{
            border-color: red;
        }
    }
    .field-required{
        position: relative;
        display: inline-block;
        vertical-align: top;
        width: 8px;
        height: 8px;
        fill: #b91010;
        line-height: 0;
    }
</style>