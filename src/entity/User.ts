import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	userType: string;

	@Column({ nullable: true })
	name: string;

	@Column({ nullable: true })
	birthdate: Date;

	@Column({ nullable: true })
	gender: string;

	@Column({ nullable: true })
	relationship: string;

	@Column('float', { nullable: true })
	height: number;

	@Column('float', { nullable: true })
	weight: number;

	@Column({ nullable: true })
	diseases: string;

	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt: Date;
}
