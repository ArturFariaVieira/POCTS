-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "imdbgrade" INTEGER NOT NULL,
    "coments" TEXT,
    "length" INTEGER NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_genreTomovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_movieToplatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "platforms_name_key" ON "platforms"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_genreTomovie_AB_unique" ON "_genreTomovie"("A", "B");

-- CreateIndex
CREATE INDEX "_genreTomovie_B_index" ON "_genreTomovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_movieToplatform_AB_unique" ON "_movieToplatform"("A", "B");

-- CreateIndex
CREATE INDEX "_movieToplatform_B_index" ON "_movieToplatform"("B");

-- AddForeignKey
ALTER TABLE "_genreTomovie" ADD CONSTRAINT "_genreTomovie_A_fkey" FOREIGN KEY ("A") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_genreTomovie" ADD CONSTRAINT "_genreTomovie_B_fkey" FOREIGN KEY ("B") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_movieToplatform" ADD CONSTRAINT "_movieToplatform_A_fkey" FOREIGN KEY ("A") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_movieToplatform" ADD CONSTRAINT "_movieToplatform_B_fkey" FOREIGN KEY ("B") REFERENCES "platforms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
