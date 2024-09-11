-- CreateTable
CREATE TABLE "Bookings" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "hospitalName" TEXT NOT NULL,
    "emergencyType" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "nurseAssistance" BOOLEAN NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);
