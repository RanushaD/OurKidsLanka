// convenience method to update object properties
export const updateObject = (oldObject, updateProperties) => {
    // spread to create a clone of oldObject fields and then replace them with new fields
    return{
        ...oldObject,
        ...updateProperties
    }
}