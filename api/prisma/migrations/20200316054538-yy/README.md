# Migration `20200316054538-yy`

This migration has been generated by balaji at 3/16/2020, 5:45:38 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Test" (
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200315174358-xx..20200316054538-yy
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = env("DATABASE_URL")
 }
 generator photonjs {
   provider = "prisma-client-js"
@@ -15,6 +15,6 @@
   createdAt DateTime @default(now())
 }
 model Test {
-  id        Int
+  id        Int @id @default(autoincrement())
 }
```


