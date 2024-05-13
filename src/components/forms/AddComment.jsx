import { useState } from "react";
import { Input } from "../forms/Input";
import {
    validateAuthor,
    validateContent,
    validateAuthorMessage,
    validateContentMessage
} from "../../shared/validator"
import { useAddComment } from '../../shared/hook/useAddComment'
import "bulma/css/bulma.min.css";

const inputs = [
    {
        field: 'content',
        label: "Content",
        validationMessage: validateContentMessage,
        type: 'text'
    }, {
        field: 'author',
        label: "Author",
        validationMessage: validateAuthorMessage,
        type: 'text'
    }
]

export const AddComment = ({ taskId }) => {
    const { addComment, isLoading } = useAddComment(); 
    const [formState, setFormState] = useState({
        content: {
            value: '',
            isValid: false,
            showError: false
        },
        author: {
            value: '',
            isValid: false,
            showError: false
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'content':
                isValid = validateContent(value)
                break;
            case 'author':
                isValid = validateAuthor(value)
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))

        console.log("isLoading", isLoading, "content", !formState.content.isValid,
            "author", !formState.author.isValid)
    }
    const handleAddComment = (event) => {
        event.preventDefault();
        console.log(taskId)
        addComment( taskId,formState.content.value, formState.author.value);
        setFormState({
            content: { value: '', isValid: false, showError: false },
            author: { value: '', isValid: false, showError: false }
        });
    }

    const isSubmitButtonDisabled = isLoading || !formState.content.isValid || !formState.author.isValid;

    return (
        <div className="columns is-centered">
            <div className="column is-half">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <h1 className="title columns is-centered">ADD COMMENT</h1>
                            <form className="">
                                <div className="field">
                                    <Input
                                        field={'content'}
                                        placeholder={'Content'}
                                        label={'Content'}
                                        value={formState.content.value}
                                        onChangeHandler={handleInputValueChange}
                                        type={'text'}
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.content.showError}
                                        validationMessage={'Validation message for content'}
                                    />
                                </div>
                                <div className="field">
                                    <Input
                                        field={'author'}
                                        placeholder={'Author'}
                                        label={'Author'}
                                        value={formState.author.value}
                                        onChangeHandler={handleInputValueChange}
                                        type={'text'}
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.author.showError}
                                        validationMessage={'Validation message for author'}
                                    />
                                </div>
                                <div className="control">
                                    <button className="button is-success is-fullwidth" onClick={handleAddComment} disabled={isSubmitButtonDisabled}>AGREGAR</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}