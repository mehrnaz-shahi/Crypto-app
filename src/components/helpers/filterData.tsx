interface DataObject {
    [key: string]: any;
}

const extractFieldsFromObjects = (data: DataObject, fieldMapping: {[fieldName: string]: string}) => {
    
    return data.map(
        item => {
            const extractedFields: DataObject = {}
            for (const originField in fieldMapping){
                const newField = fieldMapping[originField];
                if(item.hasOwnProperty(originField)){
                    extractedFields [newField] = item[originField];
                }
            }

            return  extractedFields;
        }
    )

}

const  modifyValueByKey = (objects: any[], key: string, transmission: (value: any) => any) : any[] =>{
    return objects.map(obj => {
        if(obj.hasOwnProperty(key)){
            const transformedValue = transmission(obj[key]);
            return {...obj, [key]: transformedValue}
        }

        return obj;
    })

}


export {extractFieldsFromObjects, modifyValueByKey};