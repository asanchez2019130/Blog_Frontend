export const validateAuthor =(author)=>{
    return author.length>0 && author.length<=15
}

export const validateAuthorMessage='The Author must not be empty and must be less than 15 characters'