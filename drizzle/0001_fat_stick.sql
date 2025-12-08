CREATE TABLE "animes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "animes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"main_character" varchar(255) NOT NULL,
	"watched" boolean NOT NULL,
	"image" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "foods" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "foods_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"origin" varchar(255) NOT NULL,
	"image" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "games" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "games_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"hours" integer NOT NULL,
	"image" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "music" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "music_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"band" varchar(255) NOT NULL,
	"image" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(255);