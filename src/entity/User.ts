import { lookupService } from 'dns';
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	ManyToOne,
	OneToMany,
	JoinTable,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	email: string;

	@Column({ nullable: true })
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

	@ManyToOne(() => User, (user) => user.children)
	parent: User;

	@OneToMany(() => User, (user) => user.parent)
	children: User[];
}
