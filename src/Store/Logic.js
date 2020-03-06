export function isGroupChecked(state) {
    state.data.groupsOrder.forEach(groupId => {
        const group = state.data.groups[groupId];
        let checked = true;
        checked = group.itemsIds.every(itemId =>
            state.data.items[itemId].checked
        );
        group.checked = checked;
    });
    return state;
}
