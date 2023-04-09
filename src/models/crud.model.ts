import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

interface CrudAttrs {
    name: string;
    email: string;
    age: number
}

interface CrudDoc extends mongoose.Document {
    name: string;
    email: string;
    age: number
}

interface CrudModel extends mongoose.PaginateModel<CrudDoc> {
    build(attrs: CrudAttrs): CrudDoc;
}

const CrudSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true
        }
    }
)

CrudSchema.statics.build = (attrs: CrudAttrs) => {
    return new Crud({
        name: attrs.name,
        email: attrs.email,
        age: attrs.age
    })
}

CrudSchema.plugin(mongoosePaginate);
const Crud = mongoose.model<CrudDoc, CrudModel>('crud', CrudSchema);
export { Crud };