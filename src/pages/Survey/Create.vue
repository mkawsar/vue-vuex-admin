<template>
    <div class="row">
        <div class="col-md-12 card">
            <form>
                <div class="card-content">
                    <div class="form-group required">
                        <label for="title" class="control-label">Survey Title</label>
                        <input type="text"
                               id="title"
                               class="form-control"
                               name="title"
                               v-model="survey.title"
                               v-validate="surveyCreateValidation.title">
                        <span class="text-danger" v-show="errors.has('title')">{{ errors.first('title') }}</span>
                    </div>

                    <div class="form-group">
                        <div class="checkbox">
                            <input id="survey_status" type="checkbox" name="status" v-model="survey.status">
                            <label for="survey_status">Survey Active Status</label>
                        </div>
                        <span class="text-danger" v-show="errors.has('status')">{{ errors.first('status') }}</span>
                    </div>

                    <div class="form-group required">
                        <label for="image" class="control-label">Survey Image</label>
                        <input type="file"
                               id="image"
                               ref="file"
                               class="form-control"
                               name="image"
                               v-on:change="handleOnFileChange"
                               v-validate="surveyCreateValidation.image">
                        <span class="text-danger" v-show="errors.has('image')">{{ errors.first('image') }}</span>
                    </div>
                    <div class="form-group required">
                        <label for="description" class="control-label">Survey Description</label>
                        <textarea class="form-control"
                                  name="description"
                                  v-model="survey.description"
                                  v-validate="surveyCreateValidation.description"></textarea>
                        <span class="text-danger" v-show="errors.has('description')">{{ errors.first('description') }}</span>
                    </div>

                    <div class="form-group required">
                        <label for="expire_date" class="control-label">Expire Date</label>
                        <input type="text"
                               id="expire_date"
                               class="form-control datepicker"
                               name="expire_date"
                               v-model="survey.expire_date"
                               v-validate="surveyCreateValidation.expire_date">
                        <span class="text-danger" v-show="errors.has('expire_date')">{{ errors.first('expire_date') }}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <button
                        type="submit"
                        @click.prevent="handleSubmitSurveyCreateForm"
                        class="btn btn-outline btn-success btn-wd"
                    >Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

let surveyCreateObj = {
    title: '',
    status: false,
    image: '',
    description: '',
    expire_date: ''
};
Vue.use(VeeValidate, {
    fieldsBagName: surveyCreateObj
});

export default {
    name: 'SurveyCreate',
    data() {
        return {
            survey: surveyCreateObj,
            surveyCreateValidation: {
                title: {
                    required: true
                },
                image: {
                    required: true
                },
                description: {
                    required: true
                },
                expire_date: {
                    required: true
                }
            }
        }
    },
    methods: {
        handleSubmitSurveyCreateForm() {
            this.$validator.validateAll().then(isValid => {
                if (isValid) {
                    console.log('test');
                }
            });
        },
        handleOnFileChange() {
            let file = this.$refs.file.files[0];

            const reader = new FileReader()

            let rawImg;
            reader.onloadend = () => {
                rawImg = reader.result;
                this.survey.image = rawImg;
            }
            reader.readAsDataURL(file);
        }
    }
}
</script>