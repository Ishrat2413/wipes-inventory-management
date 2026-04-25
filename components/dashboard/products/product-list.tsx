"use client";

import DashboardDataTable, {
  type DashboardFilterMenuConfig,
  type DashboardTableColumn,
} from "@/components/shared/dashboard-data-table";
import DateRangePicker, {
  type DateRange,
} from "@/components/shared/date-range-picker";
import {
  CalendarDays,
  DollarSign,
  Forward,
  IndentIncrease,
  ListFilter,
  PackageCheck,
  Package,
  PencilLine,
  Settings2,
} from "lucide-react";
import { useState } from "react";
import EditProductModal from "./edit-product-modal";

type ProductRow = {
  id: string;
  name: string;
  price: number;
  stock: number;
  status?: "low" | "out";
  description?: string;
  sku?: string;
  category?: string;
};

const initialProducts: ProductRow[] = [
  {
    id: "1",
    name: "CleanSweep Wipes Roll",
    price: 24,
    stock: 120,
    sku: "CS-WR-001",
    category: "Wipes",
  },
  {
    id: "2",
    name: "FreshWave Wipes Roll",
    price: 23,
    stock: 3,
    status: "low",
    sku: "FW-WR-002",
    category: "Wipes",
  },
  {
    id: "3",
    name: "QuickDry Wipes Roll",
    price: 22,
    stock: 0,
    status: "out",
    sku: "QD-WR-003",
    category: "Wipes",
  },
  {
    id: "4",
    name: "NatureClean Towels Roll",
    price: 20,
    stock: 150,
    sku: "NC-TR-004",
    category: "Towels",
  },
  {
    id: "5",
    name: "AllergenFree Wipes Roll",
    price: 18,
    stock: 190,
    sku: "AF-WR-005",
    category: "Wipes",
  },
  {
    id: "6",
    name: "SootheSkin Towels Roll",
    price: 19,
    stock: 130,
    sku: "SS-TR-006",
    category: "Towels",
  },
  {
    id: "7",
    name: "StainAway Cloths Roll",
    price: 13,
    stock: 160,
    sku: "SA-CR-007",
    category: "Cloths",
  },
  {
    id: "8",
    name: "FreshGuard Towels Roll",
    price: 17,
    stock: 170,
    sku: "FG-TR-008",
    category: "Towels",
  },
  {
    id: "9",
    name: "PureSoft Wipes Roll",
    price: 16,
    stock: 200,
    sku: "PS-WR-009",
    category: "Wipes",
  },
  {
    id: "10",
    name: "GentleTouch Wipes Roll",
    price: 14,
    stock: 120,
    sku: "GT-WR-010",
    category: "Wipes",
  },
  {
    id: "11",
    name: "UltraSoft Cloths Roll",
    price: 21,
    stock: 180,
    sku: "US-CR-011",
    category: "Cloths",
  },
  {
    id: "12",
    name: "EcoClean Cloths Roll",
    price: 15,
    stock: 140,
    sku: "EC-CR-012",
    category: "Cloths",
  },
  {
    id: "13",
    name: "ZilkyWipes Roll",
    price: 12,
    stock: 210,
    sku: "ZW-WR-013",
    category: "Wipes",
  },
];

export default function ProductListPage() {
  const [customDateRange, setCustomDateRange] = useState<
    DateRange | undefined
  >();
  const [selectedProduct, setSelectedProduct] = useState<ProductRow | null>(
    null,
  );
  const [productsData, setProductsData] =
    useState<ProductRow[]>(initialProducts);

  const handleEditProduct = (product: ProductRow) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleSaveProduct = async (updatedData: ProductRow) => {
    try {
      // Here you would make your API call to update the product
      console.log("Saving product:", updatedData);

      // Update the local state
      setProductsData((prevData) =>
        prevData.map((product) =>
          product.id === updatedData.id
            ? {
                ...updatedData,
                // Recalculate status based on stock
                status:
                  updatedData.stock === 0
                    ? "out"
                    : updatedData.stock <= 5
                      ? "low"
                      : undefined,
              }
            : product,
        ),
      );

      // Close the modal
      handleCloseModal();
    } catch (error) {
      console.error("Failed to save product:", error);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      // Here you would make your API call to delete the product
      console.log("Deleting product:", id);

      // Update the local state by removing the deleted product
      setProductsData((prevData) =>
        prevData.filter((product) => product.id !== id),
      );

      // Close the modal
      handleCloseModal();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const columns: DashboardTableColumn<ProductRow>[] = [
    {
      id: "product-name",
      header: "Product Name",
      icon: Package,
      widthClassName: "w-[45%]",
      cell: (row) => <span>{row.name}</span>,
    },
    {
      id: "price",
      header: "Price",
      icon: DollarSign,
      widthClassName: "w-[15%]",
      cell: (row) => <span>${row.price.toFixed(2)}</span>,
    },
    {
      id: "stock",
      header: "Stock",
      icon: IndentIncrease,
      widthClassName: "w-[18%]",
      cell: (row) => {
        if (row.status === "out") {
          return (
            <span className='text-[#ff4f4f] font-medium'>
              {row.stock} (Out of Stock)
            </span>
          );
        }

        if (row.status === "low") {
          return (
            <span className='text-[#f3a84d] font-medium'>
              {row.stock} (Low Stock)
            </span>
          );
        }

        return <span className='text-[#16a34a]'>{row.stock} in stock</span>;
      },
    },
    {
      id: "action",
      header: "Action",
      icon: Forward,
      widthClassName: "w-[23%]",
      cell: (row) => (
        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={() => handleEditProduct(row)}
            className='inline-flex items-center gap-1 rounded-md border border-[#E5E7EB] bg-[#FAFAF9] px-2.5 py-1 text-sm text-[#262626] transition-colors hover:bg-[#efefef] cursor-pointer'>
            <PencilLine className='h-3.5 w-3.5' color='#262626' />
            <span>Edit Product</span>
          </button>
          <button
            type='button'
            className='inline-flex items-center gap-1 rounded-md border border-[#E5E7EB] bg-[#FAFAF9] px-2.5 py-1 text-sm text-[#262626] transition-colors hover:bg-[#efefef] cursor-pointer'>
            <PencilLine className='h-3.5 w-3.5' color='#262626' />
            <span>Delete</span>
          </button>
        </div>
      ),
    },
  ];

  const productFilterMenu: DashboardFilterMenuConfig = {
    searchPlaceholder: "Search...",
    groups: [
      {
        id: "date-range",
        label: "Date range",
        icon: CalendarDays,
        options: [
          { id: "last-30-days", label: "Last 30 Days" },
          { id: "last-10-days", label: "Last 10 Days" },
          { id: "today", label: "Today" },
          {
            id: "custom",
            label: "Custom",
            icon: Settings2,
            keepMenuOpen: true,
            customContent: (
              <DateRangePicker
                value={customDateRange}
                onChange={setCustomDateRange}
                onApply={(range) => {
                  setCustomDateRange(range);
                  // TODO: filter data by range
                  console.log("Applied date range:", range);
                }}
              />
            ),
          },
        ],
      },
      {
        id: "stock-status",
        label: "Stock Status",
        icon: IndentIncrease,
        options: [
          { id: "all", label: "All" },
          { id: "in-stock", label: "In Stock" },
          { id: "low-stock", label: "Low Stock" },
          { id: "out-of-stock", label: "Out of Stock" },
        ],
      },
      {
        id: "product-type",
        label: "Product Type",
        icon: PackageCheck,
        options: [
          { id: "all-types", label: "All Types" },
          { id: "wipes", label: "Wipes" },
          { id: "towels", label: "Towels" },
          { id: "cloths", label: "Cloths" },
        ],
      },
    ],
  };

  return (
    <section className=''>
      <DashboardDataTable
        filterAction={{ label: "Filter", icon: ListFilter }}
        filterMenu={productFilterMenu}
        searchPlaceholder='Search Products, Status'
        data={productsData}
        columns={columns}
        getRowId={(row) => row.id}
        searchPredicate={(row, query) => {
          const text = `${row.name} ${row.price} ${row.stock} ${row.status ?? ""} ${row.sku ?? ""} ${row.category ?? ""}`;
          return text.toLowerCase().includes(query);
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        defaultPageSize={10}
      />

      {selectedProduct && (
        <EditProductModal
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={handleCloseModal}
          onSave={handleSaveProduct}
          onDelete={handleDeleteProduct}
        />
      )}
    </section>
  );
}
