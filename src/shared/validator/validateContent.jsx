export const validateContent =(content)=>{
    return content.length>0 && content.length<=100
}

export const validateContentMessage='The content must not be empty and must be less than 100 characters'