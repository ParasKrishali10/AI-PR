-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "enableDependencyRisk" BOOLEAN NOT NULL DEFAULT true,
    "enableAuthRisk" BOOLEAN NOT NULL DEFAULT true,
    "enableMalciousRisk" BOOLEAN NOT NULL DEFAULT true,
    "riskLevel" TEXT NOT NULL DEFAULT 'medium',
    "ignoredPaths" TEXT[],
    "allowedExtensions" TEXT[],
    "enableEval" BOOLEAN NOT NULL DEFAULT false,
    "enableExec" BOOLEAN NOT NULL DEFAULT false,
    "enableChildProcess" BOOLEAN NOT NULL DEFAULT false,
    "enableExternalFetch" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "commentStyle" TEXT NOT NULL DEFAULT 'detailed',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Settings" ADD CONSTRAINT "Settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
