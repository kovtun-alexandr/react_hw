import { useGetListQuery } from "@/entities/desire-item/model/itemApi";
import AddDesireLink from "@/features/desire/add/ul/AddDesireLink";
import DesireList from "@/widgets/desire-list/DesireList";

function DesireManager() {
    const { data: desieeList, error, isLoading } = useGetListQuery()
    return (<section className="desire">
        <h1>Desire</h1>
        <AddDesireLink />
        <DesireList items={desieeList} />
    </section>);
}

export default DesireManager;