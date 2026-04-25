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
  Mail,
  CircleGauge,
  IndentIncrease,
  ListFilter,
  UserRound,
  BadgeCheck,
  Settings2,
  PencilLine,
  Forward,
} from "lucide-react";
import { useState } from "react";
import EditSubscriptionModal from "./edit-subscription-modal";

type SubscriptionRow = {
  id: string;
  customerName: string;
  email: string;
  frequency: string;
  status:
    | "Active"
    | "Canceled"
    | "Skipped next delivery"
    | "Paused indefinitely";
  startingDate: string;
};

const subscriptions: SubscriptionRow[] = [
  {
    id: "1",
    customerName: "John Doe",
    email: "johndoe@gmail.com",
    frequency: "Every 1 Month",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "2",
    customerName: "Jessica Rodriguez",
    email: "jessica@example.com",
    frequency: "Every 1 Month",
    status: "Canceled",
    startingDate: "01/08/2026",
  },
  {
    id: "3",
    customerName: "Michael Brown",
    email: "michael@example.com",
    frequency: "Every 3 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "4",
    customerName: "Chris Martinez",
    email: "chris@example.com",
    frequency: "Every 12 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "5",
    customerName: "Matthew King",
    email: "matthew@example.com",
    frequency: "Every 5 Months",
    status: "Skipped next delivery",
    startingDate: "01/08/2026",
  },
  {
    id: "6",
    customerName: "Daniel Lee",
    email: "daniel@example.com",
    frequency: "Every 6 Months",
    status: "Paused indefinitely",
    startingDate: "01/08/2026",
  },
  {
    id: "7",
    customerName: "David Wilson",
    email: "david@example.com",
    frequency: "Every 4 Months",
    status: "Canceled",
    startingDate: "01/08/2026",
  },
  {
    id: "8",
    customerName: "Samantha Hernandez",
    email: "samantha@example.com",
    frequency: "Every 7 Months",
    status: "Canceled",
    startingDate: "01/08/2026",
  },
  {
    id: "9",
    customerName: "Laura Garcia",
    email: "laura@example.com",
    frequency: "Every 9 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "10",
    customerName: "Sarah Davis",
    email: "sarah@example.com",
    frequency: "Every 11 Months",
    status: "Paused indefinitely",
    startingDate: "01/08/2026",
  },
  {
    id: "11",
    customerName: "Jane Smith",
    email: "jane@example.com",
    frequency: "Every 8 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "12",
    customerName: "Emily Johnson",
    email: "emily@example.com",
    frequency: "Every 8 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "13",
    customerName: "John Doe",
    email: "johndoe@gmail.com",
    frequency: "Every 8 Months",
    status: "Skipped next delivery",
    startingDate: "01/08/2026",
  },
  {
    id: "14",
    customerName: "Olivia Clark",
    email: "olivia@example.com",
    frequency: "Every 2 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "15",
    customerName: "Liam Walker",
    email: "liam@example.com",
    frequency: "Every 10 Months",
    status: "Canceled",
    startingDate: "01/08/2026",
  },
  {
    id: "16",
    customerName: "Noah Hall",
    email: "noah@example.com",
    frequency: "Every 6 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "17",
    customerName: "Ava Allen",
    email: "ava@example.com",
    frequency: "Every 3 Months",
    status: "Paused indefinitely",
    startingDate: "01/08/2026",
  },
  {
    id: "18",
    customerName: "Sophia Wright",
    email: "sophia@example.com",
    frequency: "Every 12 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "19",
    customerName: "James Scott",
    email: "james@example.com",
    frequency: "Every 5 Months",
    status: "Canceled",
    startingDate: "01/08/2026",
  },
  {
    id: "20",
    customerName: "Benjamin Green",
    email: "benjamin@example.com",
    frequency: "Every 1 Month",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "21",
    customerName: "Isabella Adams",
    email: "isabella@example.com",
    frequency: "Every 7 Months",
    status: "Skipped next delivery",
    startingDate: "01/08/2026",
  },
  {
    id: "22",
    customerName: "Mason Baker",
    email: "mason@example.com",
    frequency: "Every 9 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "23",
    customerName: "Mia Nelson",
    email: "mia@example.com",
    frequency: "Every 4 Months",
    status: "Paused indefinitely",
    startingDate: "01/08/2026",
  },
  {
    id: "24",
    customerName: "Ethan Carter",
    email: "ethan@example.com",
    frequency: "Every 11 Months",
    status: "Active",
    startingDate: "01/08/2026",
  },
  {
    id: "25",
    customerName: "Amelia Mitchell",
    email: "amelia@example.com",
    frequency: "Every 2 Months",
    status: "Canceled",
    startingDate: "01/08/2026",
  },
];

export default function SubscriptionList() {
  const [customDateRange, setCustomDateRange] = useState<
    DateRange | undefined
  >();
  const [selectedSubscription, setSelectedSubscription] =
    useState<SubscriptionRow | null>(null);
  const [subscriptionsData, setSubscriptionsData] =
    useState<SubscriptionRow[]>(subscriptions);

  const handleEditDetails = (subscription: SubscriptionRow) => {
    setSelectedSubscription(subscription);
  };

  const handleCloseModal = () => {
    setSelectedSubscription(null);
  };

  const handleSaveSubscription = async (updatedData: SubscriptionRow) => {
    try {
      // Here you would make your API call to update the subscription
      console.log("Saving subscription:", updatedData);

      // Update the local state
      setSubscriptionsData((prevData) =>
        prevData.map((sub) => (sub.id === updatedData.id ? updatedData : sub)),
      );

      // Close the modal
      handleCloseModal();
    } catch (error) {
      console.error("Failed to save subscription:", error);
    }
  };

  const handleDeleteSubscription = async (id: string) => {
    try {
      // Here you would make your API call to delete the subscription
      console.log("Deleting subscription:", id);

      // Update the local state by removing the deleted subscription
      setSubscriptionsData((prevData) =>
        prevData.filter((sub) => sub.id !== id),
      );

      // Close the modal
      handleCloseModal();
    } catch (error) {
      console.error("Failed to delete subscription:", error);
    }
  };

  const columns: DashboardTableColumn<SubscriptionRow>[] = [
    {
      id: "customer-name",
      header: "Customer Name",
      icon: UserRound,
      widthClassName: "w-[24%]",
      cell: (row) => <span>{row.customerName}</span>,
    },
    {
      id: "email",
      header: "Email",
      icon: Mail,
      widthClassName: "w-[27%]",
      cell: (row) => <span>{row.email}</span>,
    },
    {
      id: "frequency",
      header: "Frequency",
      icon: CircleGauge,
      widthClassName: "w-[22%]",
      cell: (row) => <span>{row.frequency}</span>,
    },
    {
      id: "status",
      header: "Status",
      icon: BadgeCheck,
      widthClassName: "w-[21%]",
      cell: (row) => <span>{row.status}</span>,
    },
    {
      id: "starting-date",
      header: "Starting Date",
      icon: CalendarDays,
      widthClassName: "w-[18%]",
      cell: (row) => <span>{row.startingDate}</span>,
    },
    {
      id: "action",
      header: "Action",
      icon: Forward,
      widthClassName: "w-[16%]",
      cell: (row) => (
        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={() => handleEditDetails(row)}
            className='inline-flex items-center gap-1 rounded-md border border-[#E5E7EB] bg-[#FAFAF9] px-2.5 py-1 text-sm text-[#262626] transition-colors hover:bg-[#efefef] cursor-pointer'>
            <PencilLine className='h-3.5 w-3.5' color='#262626' />
            <span>Edit</span>
          </button>
        </div>
      ),
    },
  ];

  const subscriptionFilterMenu: DashboardFilterMenuConfig = {
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
        id: "subscription-status",
        label: "Status",
        icon: BadgeCheck,
        options: [
          { id: "all", label: "All" },
          { id: "active", label: "Active" },
          { id: "canceled", label: "Canceled" },
          { id: "skipped-next-delivery", label: "Skipped" },
          { id: "paused-indefinitely", label: "Paused indefinitely" },
        ],
      },
      {
        id: "billing-frequency",
        label: "Frequency",
        icon: IndentIncrease,
        options: [
          { id: "all-frequencies", label: "All Frequencies" },
          { id: "every-1-month", label: "Every 1 Month" },
          { id: "every-3-months", label: "Every 3 Months" },
          { id: "every-6-months", label: "Every 6 Months" },
          { id: "every-12-months", label: "Every 12 Months" },
        ],
      },
    ],
  };

  return (
    <section className=''>
      <DashboardDataTable
        filterAction={{ label: "Filter", icon: ListFilter }}
        filterMenu={subscriptionFilterMenu}
        searchPlaceholder='Search Products, Status'
        data={subscriptionsData}
        columns={columns}
        getRowId={(row) => row.id}
        searchPredicate={(row, query) => {
          const text = `${row.customerName} ${row.email} ${row.frequency} ${row.status} ${row.startingDate}`;
          return text.toLowerCase().includes(query);
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        defaultPageSize={10}
      />

      {selectedSubscription && (
        <EditSubscriptionModal
          key={selectedSubscription.id}
          subscription={selectedSubscription}
          onClose={handleCloseModal}
          onSave={handleSaveSubscription}
          onDelete={handleDeleteSubscription}
        />
      )}
    </section>
  );
}
