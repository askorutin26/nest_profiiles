//структура таблицы users в базе данных, название и данные в столбцах

import { Column, DataType, Model, Table } from 'sequelize-typescript';

//поля для создание объекта из класса
interface profileCreationAttr {
  name: string;
  surname: string;
  phone: string;
  userID: string;
}
@Table({ tableName: 'profiles' }) // декоратор чтобы класс стал таблицей в бд
export class Profile extends Model<Profile, profileCreationAttr> {
  //generics ( <> )
  //декоратор дял создания строки в таблице, внутри конфиг, указание типов
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number; //название и тип полей в таблице

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING })
  surname: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  userID: string;
}
