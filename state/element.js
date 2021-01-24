import { atomFamily } from 'recoil';

const elementState = atomFamily({
    key: 'elements',
    default: () => ({
        width: 10,
        height: 10,
        shape: 'rectangle',
        top: Math.random(),
        bottom: Math.random()
    }) 
});

export {
    elementState
}