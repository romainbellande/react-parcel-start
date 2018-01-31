import { IEntity } from '../../../common/interfaces';
export interface IEntityState {
  entities: IEntity[];
  ids: number[];
  selectedId: number;
}

export const initialState = {
  entities: null,
  ids: null,
  selectedId: null,
};
