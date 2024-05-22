import { ReactNode } from "react";
import {
  FeatureIcon1,
  FeatureIcon10,
  FeatureIcon11,
  FeatureIcon12,
  FeatureIcon2,
  FeatureIcon3,
  FeatureIcon4,
  FeatureIcon5,
  FeatureIcon6,
  FeatureIcon7,
  FeatureIcon8,
  FeatureIcon9,
} from "../icons";
import React from "react";

interface data {
  topSection: {
    chipTitle: string;
    title: string;
    subtitle: string;

    features: {
      logo: ReactNode;
      title: string;
      subtitle: string;
    }[];
  };
  bottomSection: {
    chipTitle: string;
    title: string;
    subtitle: string;

    features: {
      logo: ReactNode;
      title: string;
      subtitle: string;
    }[];
  };
}

export const AppGuideData: data = {
  topSection: {
    chipTitle: "For College Students",
    title: "Simplify your college finances",
    subtitle:
      "Easily plan and track your student expenses, from tuition and textbooks to dorm supplies and dining out. Our intuitive interface lets you input future incomes and expenses, providing valuable insights into your cash flow for the semester and beyond.",
    features: [
      {
        logo: <FeatureIcon1 />,
        title: "Track recurring expenses",
        subtitle:
          "Manage significant costs like tuition, textbooks, and rent with ease.",
      },
      {
        logo: <FeatureIcon2 />,
        title: "Budget for variable expenses",
        subtitle:
          "Plan for food, entertainment, and emergencies, adjusting as needed.",
      },
      {
        logo: <FeatureIcon3 />,
        title: "Manage student loans",
        subtitle:
          "Spread out lump sum loan payments over months to cover expenses efficiently.",
      },
      {
        logo: <FeatureIcon4 />,
        title: "Money Flow Monitoring",
        subtitle:
          "Use the Money Flow screen to ensure you're prepared for upcoming expenses.",
      },
      {
        logo: <FeatureIcon5 />,
        title: "Semester Expense Forecasting",
        subtitle:
          "Plan ahead for semester expenses and adjust for changes in income.",
      },
      {
        logo: <FeatureIcon6 />,
        title: "Money Management Tips",
        subtitle:
          "Receive advice on avoiding common financial pitfalls and strategies for saving money on a tight budget.",
      },
    ],
  },
  bottomSection: {
    chipTitle: "For People with Multiple Jobs/Gigs",
    title: "Track all your income streams",
    subtitle:
      "Say goodbye to the hassle of juggling multiple spreadsheets or apps. With Mffais, you can easily input and categorize income from different sources, giving you a comprehensive overview of your cash flow at a glance.",
    features: [
      {
        logo: <FeatureIcon7 />,
        title: "Setting up multiple-income streams",
        subtitle:
          "Enter various income sources with different frequencies (e.g., weekly gigs, monthly freelance payments).",
      },
      {
        logo: <FeatureIcon8 />,
        title: "Balance income and expenses",
        subtitle:
          "Enter various income sources with different frequencies (e.g., weekly gigs, monthly freelance payments).",
      },
      {
        logo: <FeatureIcon9 />,
        title: "Ensure all bills are covered",
        subtitle:
          "Enter various income sources with different frequencies (e.g., weekly gigs, monthly freelance payments).",
      },
      {
        logo: <FeatureIcon10 />,
        title: "Set aside money for taxes and irregular expenses",
        subtitle:
          "Enter various income sources with different frequencies (e.g., weekly gigs, monthly freelance payments).",
      },
      {
        logo: <FeatureIcon11 />,
        title: "Adjust for cash flow variability",
        subtitle:
          "Enter various income sources with different frequencies (e.g., weekly gigs, monthly freelance payments).",
      },
      {
        logo: <FeatureIcon12 />,
        title: "Strategies for financial stability",
        subtitle:
          "Enter various income sources with different frequencies (e.g., weekly gigs, monthly freelance payments).",
      },
    ],
  },
};
