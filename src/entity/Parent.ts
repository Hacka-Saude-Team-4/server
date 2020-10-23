import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
} from 'typeorm';

@Entity()
export class Parent extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column({ nullable: true })
	name: string;

	@Column({ nullable: true })
	birthdate: number;

	@Column({ nullable: true })
	height: number;

	@Column({ nullable: true })
	weight: number;

	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt: Date;
}
