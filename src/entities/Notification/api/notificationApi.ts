import { rtkApi } from "shared/api/rtkApi";
import { Notification } from "../model/types/notification";

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationsByUserId: build.query<Notification[], string>({
      query: (userId: string) => ({
        url: "/notifications",
        params: {
          userId,
        },
      }),
    }),
  }),
});

export const useNotificationsByUserId =
  notificationApi.useGetNotificationsByUserIdQuery;
