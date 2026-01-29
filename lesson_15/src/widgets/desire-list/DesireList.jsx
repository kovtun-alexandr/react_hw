import DesireCard from "@/entities/desire-item";
import DeleteDesireButton from "@/features/desire/delete";
import EditLink from "@/features/desire/edit/ui/EditLink";

function DesireList({ items }) {
    if (!items || items.length === 0) return <div>Wishlist is empty</div>
    return (
        <div className="list">
            {
                items.map(item => (
                    <DesireCard
                        key={item.id}
                        item={item}
                        actions={[
                            <EditLink id={item.id} />,
                            <DeleteDesireButton id={item.id} />
                        ]}
                    />
                ))
            }
        </div>
    );
}

export default DesireList;