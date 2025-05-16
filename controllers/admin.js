import prisma from "../prisma/client.js";

export const getDashboardStats = async (req, res) => {
    try {
      const totalUsers = await prisma.user.count();
      const totalStores = await prisma.store.count();
      const totalRatings = await prisma.rating.count();
  
      res.json({ totalUsers, totalStores, totalRatings });
    } catch (error) {
      res.status(500).json({ error: "Error fetching dashboard stats" });
    }
  };