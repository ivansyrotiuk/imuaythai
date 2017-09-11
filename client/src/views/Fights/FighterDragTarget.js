import { findDOMNode } from 'react-dom';
import { moveFighter } from '../../actions/FightActions'
import store from '../../store'
//const {isOver, canDrop, connectDropTarget} = this.props;

const canDropFighter = (source, target) => {
    if (source.fight.redAthleteId == null && source.fight.blueAthleteId == null) {
        return false
    }

    if (target.fight.redAthleteId == null && target.fight.blueAthleteId == null) {
        return false
    }

    if (source.fight.id == target.fight.id && source.fighter.id == target.fighter.id) {
        return false
    }

    return true;
}

export const fighterTarget = {
    canDrop(props, monitor) {
        // You can disallow drop based on props or item
        const item = monitor.getItem();
        return canDropFighter(item, props);
    },

    hover(props, monitor, component) {
        // This is fired very often and lets you perform side effects
        // in response to the hover. You can't handle enter and leave
        // here—if you need them, put monitor.isOver() into collect() so you
        // can just use componentWillReceiveProps() to handle enter/leave.

        // You can access the coordinates if you need them
        const clientOffset = monitor.getClientOffset();
        //const componentRect = findDOMNode(component).getBoundingClientRect();
        //console.log(componentRect);
        // You can check whether we're over a nested drop target
        const isJustOverThisOne = monitor.isOver({
            shallow: true
        });

        // You will receive hover() even for items for which canDrop() is false
        const canDrop = monitor.canDrop();
    },

    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            // If you want, you can check whether some nested
            // target already handled drop
            return;
        }

        // Obtain the dragged item
        const item = monitor.getItem();

        const movingParams = {
            sourceFightId: item.fight.id,
            sourceFighterId: item.fighter.id,
            targetFightId: props.fight.id,
            targetFighterId: props.fighter.id
        }

        store.dispatch(moveFighter(movingParams));
        // You can do something with it
        //ChessActions.movePiece(item.fromPosition, props.position);

        // You can also do nothing and return a drop result,
        // which will be available as monitor.getDropResult()
        // in the drag source's endDrag() method
        return {
            moved: true
        };
    }
};

export function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({
            shallow: true
        }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType(),
    };
}