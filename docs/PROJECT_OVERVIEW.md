# ภาพรวมโครงการระบบจัดการคลังสินค้า (WMS)

## 1. บทนำ (Introduction)
ระบบจัดการคลังสินค้า (Warehouse Management System - WMS) เป็นซอฟต์แวร์ที่ออกแบบมาเพื่อควบคุมและบริหารจัดการการดำเนินงานประจำวันภายในคลังสินค้า เป้าหมายหลักของโครงการนี้คือการพัฒนาระบบ WMS ที่มีประสิทธิภาพ ยืดหยุ่น และสามารถปรับขนาดได้ เพื่อเพิ่มประสิทธิภาพในการจัดการสินค้าคงคลัง ลดข้อผิดพลาด และเพิ่มความพึงพอใจให้กับลูกค้า

## 2. กลุ่มเป้าหมาย (Target Audience)
*   นักพัฒนาใหม่ที่เข้าร่วมโครงการ
*   ระบบปัญญาประดิษฐ์ (AI) ที่ต้องการทำความเข้าใจโครงสร้างและฟังก์ชันการทำงานของระบบ

## 3. ฟีเจอร์หลัก (Key Features)
[ยังไม่มีข้อมูล]

## 4. เทคโนโลยีที่ใช้ (Technology Stack)
*(กรุณากรอกข้อมูล)*
*   **Frontend:** React, TypeScript, Tailwind CSS, Zustand
*   **Backend:** Dotnet 8, C#, Entity Framework Core
*   **Database:** PostgreSQL

## 5. เริ่มต้นใช้งาน (Getting Started - for new developers)
*   **สิ่งที่ต้องติดตั้งก่อน (Prerequisites):**
    *   Node.js 18+
    *   Git
    *   Docker (optional)

*   **Clone Repository:**
    ```bash
    git clone https://github.com/your-org/wms-system.git
    cd wms-system
    ```

*   **ขั้นตอนการติดตั้ง (Installation steps):**
    ```bash
    # ติดตั้ง dependencies
    npm install
    ```

*   **คำสั่งในการรันโปรแกรม (Running the application):**
    ```bash
    # รันในโหมด development
    npm run dev
    ```

*   **โครงสร้างไดเรกทอรี/โมดูลสำคัญ:**
    *   `src/`: โค้ดหลักของโปรแกรม
        *   `features/`: โมดูลหลักของระบบ แยกตามฟีเจอร์
            *   `auth/`: ระบบยืนยันตัวตน
                *   `components/`: คอมโพเนนต์ที่ใช้เฉพาะในฟีเจอร์นี้
                *   `hooks/`: custom hooks สำหรับฟีเจอร์นี้
                *   `services/`: บริการเฉพาะของฟีเจอร์
                *   `types/`: type definitions
                *   `utils/`: utility functions
                *   `store/`: Zustand store สำหรับฟีเจอร์นี้
            *   `inventory/`: ระบบจัดการสินค้าคงคลัง
                *   `components/`
                *   `hooks/`
                *   `services/`
                *   `types/`
                *   `utils/`
                *   `store/`: Zustand store สำหรับฟีเจอร์นี้
            *   `orders/`: ระบบจัดการคำสั่งซื้อ
                *   `components/`
                *   `hooks/`
                *   `services/`
                *   `types/`
                *   `utils/`
                *   `store/`: Zustand store สำหรับฟีเจอร์นี้
            *   `reports/`: ระบบรายงาน
                *   `components/`
                *   `hooks/`
                *   `services/`
                *   `types/`
                *   `utils/`
                *   `store/`: Zustand store สำหรับฟีเจอร์นี้
        *   `components/`: คอมโพเนนต์ที่ใช้ร่วมกัน
        *   `hooks/`: custom hooks ที่ใช้ร่วมกัน
        *   `services/`: บริการที่ใช้ร่วมกัน
        *   `types/`: type definitions ที่ใช้ร่วมกัน
        *   `utils/`: utility functions ที่ใช้ร่วมกัน
        *   `store/`: Zustand store ที่ใช้ร่วมกัน
        *   `config/`: ไฟล์ตั้งค่าต่างๆ
        *   `styles/`: ไฟล์ CSS และ styling
    *   `tests/`: โค้ดสำหรับทดสอบระบบ
        *   `unit/`: unit tests
        *   `integration/`: integration tests
        *   `e2e/`: end-to-end tests
    *   `docs/`: เอกสารประกอบโครงการ
        *   `api/`: เอกสาร API
        *   `architecture/`: เอกสารสถาปัตยกรรม
        *   `guides/`: คู่มือการใช้งาน

## 6. แนวทางการให้ AI ทำความเข้าใจ/โต้ตอบกับโครงการ
*   **API Endpoints:**
    *   เอกสาร API (Swagger/OpenAPI) ดูได้ที่ `docs/api/swagger.json`
    *   ตัวอย่าง Endpoints สำคัญ (อ้างอิงจากระบบจริง):
        *   `POST /api/AccountGroup/getgroups`: ดึงข้อมูลกลุ่มบัญชี
        *   `POST /api/AccountGroup/getusergroups`: ดึงกลุ่มบัญชีของผู้ใช้
*   **โครงสร้างข้อมูล (Data Models/Schema):**
    *   ทำความเข้าใจ `entities` หรือ `models` ในโค้ดเพื่อดูโครงสร้างการจัดเก็บข้อมูลหลัก เช่น `Product`, `InventoryItem`, `PurchaseOrder`, `SalesOrder`, `Shipment`
*   **ขั้นตอนการทำงานหลัก (Key Workflows):**
   [ยังไม่มีข้อมูล]

## 7. แผนภาพ (Diagrams)

### แผนภาพสถาปัตยกรรมระบบ WMS (ตัวอย่าง)
(จะสร้างแผนภาพ Mermaid ให้ด้านล่าง)
[ยังไม่มีข้อมูล]
```mermaid

```

---
*เอกสารนี้จะมีการปรับปรุงเพิ่มเติมตามความคืบหน้าของโครงการ* 

