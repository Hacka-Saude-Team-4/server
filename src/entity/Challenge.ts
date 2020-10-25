import { lookupService } from 'dns';
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	ManyToOne,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Challenge extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	title: string;

	@Column({ nullable: true })
	coins: number;

	@Column({ nullable: true })
	assignedBy: number;

	@Column({ nullable: true })
	assignedTo: number;

	@Column({ nullable: true })
	assignedToName: string;

	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt: Date;

	@ManyToOne(() => User, (user) => user.challenges)
	user: User;
}
