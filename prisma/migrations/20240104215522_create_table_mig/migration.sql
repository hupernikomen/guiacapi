-- CreateTable
CREATE TABLE "foods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" JSONB,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'food',
    "delivery" BOOLEAN DEFAULT false,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menus" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "foodID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "menus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menus" ADD CONSTRAINT "menus_foodID_fkey" FOREIGN KEY ("foodID") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
