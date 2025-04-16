import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema({
  userId: String,
  action: String,
  metadata: Object,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("ActivityLog", activityLogSchema);
