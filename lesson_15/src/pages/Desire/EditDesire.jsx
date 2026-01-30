import frontRoutes from "@/app/router/frontRoutes";
import { useAddItemMutation } from "@/features/desire/add/model/addItemApi";
import { useEditItemMutation, useGetItemQuery } from "@/features/desire/edit/model/editApi";
import DesireForm from "@/shared/components/DesireForm/insex";
import Loading from "@/shared/components/Loading/Loading";
import { useNavigate, useParams } from "react-router";

function EditDesire() {
    const { id } = useParams()
    const navigation = useNavigate()

    const { data: item, isLoading, error } = useGetItemQuery(id, { skip: !id })
    const [editItem, { isLoading: isSaving }] = useEditItemMutation()
    const [addItem, { isLoading: isAdding }] = useAddItemMutation()

    const isEdit = !!id

    if (isAdding || isSaving || isAdding) return <Loading />
    if (isEdit && !item) return <div>Desire not found</div>

    const handleSubmit = async (values) => {
        if (isEdit) {
            await editItem({ id, data: values })
        } else {
            await addItem(values)
        }
        navigation(frontRoutes.navigate.desires.root)
    }

    const displayTitle = isEdit
        ? <h1>Edit desire</h1>
        : <h1>Add desire</h1>
    return (<section className="edit">
        {displayTitle}
        <DesireForm
            initialValue={item || { title: '', date: '', friendName: '' }}
            onSubmit={handleSubmit}
        />
    </section>);
}

export default EditDesire;