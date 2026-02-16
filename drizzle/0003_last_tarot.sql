ALTER TABLE "users" RENAME COLUMN "age" TO "lastName";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "address" varchar(255) NOT NULL;