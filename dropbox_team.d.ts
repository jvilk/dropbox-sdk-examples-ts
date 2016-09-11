/// <reference path="./dropbox_types.d.ts" />
/// <reference path="./dropbox.d.ts" />
declare module DropboxTypes {
  class DropboxTeam extends DropboxBase {
    /**
     * The DropboxTeam SDK class.
     */
    constructor(options: DropboxOptions);

    /**
     * Returns an instance of Dropbox that can make calls to user api endpoints on
     * behalf of the passed user id, using the team access token. Only relevant for
     * team endpoints.
     */
    actAsUser(userId: string): Dropbox;



    /**
     * Creates a new, empty group, with a requested name. Permission : Team
     * member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupCreateError>.
     * @param arg The request parameters.
     */
    public teamAlphaGroupsCreate(arg: team.GroupCreateArg): Promise<team.GroupFullInfo>;

    /**
     * Retrieves information about one or more groups. Permission : Team
     * Information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupsGetInfoError>.
     * @param arg The request parameters.
     */
    public teamAlphaGroupsGetInfo(arg: team.GroupsSelector): Promise<team.GroupsGetInfoResult>;

    /**
     * Lists groups on a team. Permission : Team Information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public teamAlphaGroupsList(arg: team.GroupsListArg): Promise<team.GroupsListResult>;

    /**
     * Once a cursor has been retrieved from alpha/groups/list, use this to
     * paginate through all groups. Permission : Team information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupsListContinueError>.
     * @param arg The request parameters.
     */
    public teamAlphaGroupsListContinue(arg: team.GroupsListContinueArg): Promise<team.GroupsListResult>;

    /**
     * Updates a group's name, external ID or management type. Permission : Team
     * member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupUpdateError>.
     * @param arg The request parameters.
     */
    public teamAlphaGroupsUpdate(arg: team.GroupUpdateArgs): Promise<team.GroupFullInfo>;

    /**
     * List all device sessions of a team's member.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.ListMemberDevicesError>.
     * @param arg The request parameters.
     */
    public teamDevicesListMemberDevices(arg: team.ListMemberDevicesArg): Promise<team.ListMemberDevicesResult>;

    /**
     * List all device sessions of a team.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.ListMembersDevicesError>.
     * @param arg The request parameters.
     */
    public teamDevicesListMembersDevices(arg: team.ListMembersDevicesArg): Promise<team.ListMembersDevicesResult>;

    /**
     * List all device sessions of a team.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.ListTeamDevicesError>.
     * @deprecated
     * @param arg The request parameters.
     */
    public teamDevicesListTeamDevices(arg: team.ListTeamDevicesArg): Promise<team.ListTeamDevicesResult>;

    /**
     * Revoke a device session of a team's member
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.RevokeDeviceSessionError>.
     * @param arg The request parameters.
     */
    public teamDevicesRevokeDeviceSession(arg: team.RevokeDeviceSessionArg): Promise<void>;

    /**
     * Revoke a list of device sessions of team members
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.RevokeDeviceSessionBatchError>.
     * @param arg The request parameters.
     */
    public teamDevicesRevokeDeviceSessionBatch(arg: team.RevokeDeviceSessionBatchArg): Promise<team.RevokeDeviceSessionBatchResult>;

    /**
     * Retrieves information about a team.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public teamGetInfo(arg: void): Promise<team.TeamGetInfoResult>;

    /**
     * Creates a new, empty group, with a requested name. Permission : Team
     * member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupCreateError>.
     * @param arg The request parameters.
     */
    public teamGroupsCreate(arg: team.GroupCreateArg): Promise<team.GroupFullInfo>;

    /**
     * Deletes a group. The group is deleted immediately. However the revoking
     * of group-owned resources may take additional time. Use the
     * groups/job_status/get to determine whether this process has completed.
     * Permission : Team member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupDeleteError>.
     * @param arg The request parameters.
     */
    public teamGroupsDelete(arg: team.GroupSelector): Promise<async.LaunchEmptyResult>;

    /**
     * Retrieves information about one or more groups. Permission : Team
     * Information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupsGetInfoError>.
     * @param arg The request parameters.
     */
    public teamGroupsGetInfo(arg: team.GroupsSelector): Promise<team.GroupsGetInfoResult>;

    /**
     * Once an async_job_id is returned from groups/delete, groups/members/add ,
     * or groups/members/remove use this method to poll the status of
     * granting/revoking group members' access to group-owned resources.
     * Permission : Team member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupsPollError>.
     * @param arg The request parameters.
     */
    public teamGroupsJobStatusGet(arg: async.PollArg): Promise<async.PollEmptyResult>;

    /**
     * Lists groups on a team. Permission : Team Information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public teamGroupsList(arg: team.GroupsListArg): Promise<team.GroupsListResult>;

    /**
     * Once a cursor has been retrieved from groups/list, use this to paginate
     * through all groups. Permission : Team information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupsListContinueError>.
     * @param arg The request parameters.
     */
    public teamGroupsListContinue(arg: team.GroupsListContinueArg): Promise<team.GroupsListResult>;

    /**
     * Adds members to a group. The members are added immediately. However the
     * granting of group-owned resources may take additional time. Use the
     * groups/job_status/get to determine whether this process has completed.
     * Permission : Team member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupMembersAddError>.
     * @param arg The request parameters.
     */
    public teamGroupsMembersAdd(arg: team.GroupMembersAddArg): Promise<team.GroupMembersChangeResult>;

    /**
     * Lists members of a group. Permission : Team Information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupSelectorError>.
     * @param arg The request parameters.
     */
    public teamGroupsMembersList(arg: team.GroupsMembersListArg): Promise<team.GroupsMembersListResult>;

    /**
     * Once a cursor has been retrieved from groups/members/list, use this to
     * paginate through all members of the group. Permission : Team information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupsMembersListContinueError>.
     * @param arg The request parameters.
     */
    public teamGroupsMembersListContinue(arg: team.GroupsMembersListContinueArg): Promise<team.GroupsMembersListResult>;

    /**
     * Removes members from a group. The members are removed immediately.
     * However the revoking of group-owned resources may take additional time.
     * Use the groups/job_status/get to determine whether this process has
     * completed. This method permits removing the only owner of a group, even
     * in cases where this is not possible via the web client. Permission : Team
     * member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupMembersRemoveError>.
     * @param arg The request parameters.
     */
    public teamGroupsMembersRemove(arg: team.GroupMembersRemoveArg): Promise<team.GroupMembersChangeResult>;

    /**
     * Sets a member's access type in a group. Permission : Team member
     * management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupMemberSetAccessTypeError>.
     * @param arg The request parameters.
     */
    public teamGroupsMembersSetAccessType(arg: team.GroupMembersSetAccessTypeArg): Promise<team.GroupsGetInfoResult>;

    /**
     * Updates a group's name and/or external ID. Permission : Team member
     * management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.GroupUpdateError>.
     * @param arg The request parameters.
     */
    public teamGroupsUpdate(arg: team.GroupUpdateArgs): Promise<team.GroupFullInfo>;

    /**
     * List all linked applications of the team member. Note, this endpoint does
     * not list any team-linked applications.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.ListMemberAppsError>.
     * @param arg The request parameters.
     */
    public teamLinkedAppsListMemberLinkedApps(arg: team.ListMemberAppsArg): Promise<team.ListMemberAppsResult>;

    /**
     * List all applications linked to the team members' accounts. Note, this
     * endpoint does not list any team-linked applications.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.ListMembersAppsError>.
     * @param arg The request parameters.
     */
    public teamLinkedAppsListMembersLinkedApps(arg: team.ListMembersAppsArg): Promise<team.ListMembersAppsResult>;

    /**
     * List all applications linked to the team members' accounts. Note, this
     * endpoint doesn't list any team-linked applications.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.ListTeamAppsError>.
     * @deprecated
     * @param arg The request parameters.
     */
    public teamLinkedAppsListTeamLinkedApps(arg: team.ListTeamAppsArg): Promise<team.ListTeamAppsResult>;

    /**
     * Revoke a linked application of the team member
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.RevokeLinkedAppError>.
     * @param arg The request parameters.
     */
    public teamLinkedAppsRevokeLinkedApp(arg: team.RevokeLinkedApiAppArg): Promise<void>;

    /**
     * Revoke a list of linked applications of the team members
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.RevokeLinkedAppBatchError>.
     * @param arg The request parameters.
     */
    public teamLinkedAppsRevokeLinkedAppBatch(arg: team.RevokeLinkedApiAppBatchArg): Promise<team.RevokeLinkedAppBatchResult>;

    /**
     * Adds members to a team. Permission : Team member management A maximum of
     * 20 members can be specified in a single call. If no Dropbox account
     * exists with the email address specified, a new Dropbox account will be
     * created with the given email address, and that account will be invited to
     * the team. If a personal Dropbox account exists with the email address
     * specified in the call, this call will create a placeholder Dropbox
     * account for the user on the team and send an email inviting the user to
     * migrate their existing personal account onto the team. Team member
     * management apps are required to set an initial given_name and surname for
     * a user to use in the team invitation and for 'Perform as team member'
     * actions taken on the user before they become 'active'.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public teamMembersAdd(arg: team.MembersAddArg): Promise<team.MembersAddLaunch>;

    /**
     * Once an async_job_id is returned from members/add , use this to poll the
     * status of the asynchronous request. Permission : Team member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<async.PollError>.
     * @param arg The request parameters.
     */
    public teamMembersAddJobStatusGet(arg: async.PollArg): Promise<team.MembersAddJobStatus>;

    /**
     * Returns information about multiple team members. Permission : Team
     * information This endpoint will return MembersGetInfoItem.id_not_found,
     * for IDs (or emails) that cannot be matched to a valid team member.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersGetInfoError>.
     * @param arg The request parameters.
     */
    public teamMembersGetInfo(arg: team.MembersGetInfoArgs): Promise<team.MembersGetInfoResult>;

    /**
     * Lists members of a team. Permission : Team information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersListError>.
     * @param arg The request parameters.
     */
    public teamMembersList(arg: team.MembersListArg): Promise<team.MembersListResult>;

    /**
     * Once a cursor has been retrieved from members/list, use this to paginate
     * through all team members. Permission : Team information
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersListContinueError>.
     * @param arg The request parameters.
     */
    public teamMembersListContinue(arg: team.MembersListContinueArg): Promise<team.MembersListResult>;

    /**
     * Recover a deleted member. Permission : Team member management Exactly one
     * of team_member_id, email, or external_id must be provided to identify the
     * user account.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersRecoverError>.
     * @param arg The request parameters.
     */
    public teamMembersRecover(arg: team.MembersRecoverArg): Promise<void>;

    /**
     * Removes a member from a team. Permission : Team member management Exactly
     * one of team_member_id, email, or external_id must be provided to identify
     * the user account. This is not a deactivation where the account can be
     * re-activated again. Calling members/add with the removed user's email
     * address will create a new account with a new team_member_id that will not
     * have access to any content that was shared with the initial account. This
     * endpoint may initiate an asynchronous job. To obtain the final result of
     * the job, the client should periodically poll
     * members/remove/job_status/get.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersRemoveError>.
     * @param arg The request parameters.
     */
    public teamMembersRemove(arg: team.MembersRemoveArg): Promise<async.LaunchEmptyResult>;

    /**
     * Once an async_job_id is returned from members/remove , use this to poll
     * the status of the asynchronous request. Permission : Team member
     * management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<async.PollError>.
     * @param arg The request parameters.
     */
    public teamMembersRemoveJobStatusGet(arg: async.PollArg): Promise<async.PollEmptyResult>;

    /**
     * Sends welcome email to pending team member. Permission : Team member
     * management Exactly one of team_member_id, email, or external_id must be
     * provided to identify the user account. No-op if team member is not
     * pending.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersSendWelcomeError>.
     * @param arg The request parameters.
     */
    public teamMembersSendWelcomeEmail(arg: team.UserSelectorArg): Promise<void>;

    /**
     * Updates a team member's permissions. Permission : Team member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersSetPermissionsError>.
     * @param arg The request parameters.
     */
    public teamMembersSetAdminPermissions(arg: team.MembersSetPermissionsArg): Promise<team.MembersSetPermissionsResult>;

    /**
     * Updates a team member's profile. Permission : Team member management
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersSetProfileError>.
     * @param arg The request parameters.
     */
    public teamMembersSetProfile(arg: team.MembersSetProfileArg): Promise<team.TeamMemberInfo>;

    /**
     * Suspend a member from a team. Permission : Team member management Exactly
     * one of team_member_id, email, or external_id must be provided to identify
     * the user account.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersSuspendError>.
     * @param arg The request parameters.
     */
    public teamMembersSuspend(arg: team.MembersDeactivateArg): Promise<void>;

    /**
     * Unsuspend a member from a team. Permission : Team member management
     * Exactly one of team_member_id, email, or external_id must be provided to
     * identify the user account.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.MembersUnsuspendError>.
     * @param arg The request parameters.
     */
    public teamMembersUnsuspend(arg: team.MembersUnsuspendArg): Promise<void>;

    /**
     * Add a property template. See route files/properties/add to add properties
     * to a file.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<properties.ModifyPropertyTemplateError>.
     * @param arg The request parameters.
     */
    public teamPropertiesTemplateAdd(arg: team.AddPropertyTemplateArg): Promise<team.AddPropertyTemplateResult>;

    /**
     * Get the schema for a specified template.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<properties.PropertyTemplateError>.
     * @param arg The request parameters.
     */
    public teamPropertiesTemplateGet(arg: properties.GetPropertyTemplateArg): Promise<properties.GetPropertyTemplateResult>;

    /**
     * Get the property template identifiers for a team. To get the schema of
     * each template use properties/template/get.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<properties.PropertyTemplateError>.
     * @param arg The request parameters.
     */
    public teamPropertiesTemplateList(arg: void): Promise<properties.ListPropertyTemplateIds>;

    /**
     * Update a property template. This route can update the template name, the
     * template description and add optional properties to templates.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<properties.ModifyPropertyTemplateError>.
     * @param arg The request parameters.
     */
    public teamPropertiesTemplateUpdate(arg: team.UpdatePropertyTemplateArg): Promise<team.UpdatePropertyTemplateResult>;

    /**
     * Retrieves reporting data about a team's user activity.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.DateRangeError>.
     * @param arg The request parameters.
     */
    public teamReportsGetActivity(arg: team.DateRange): Promise<team.GetActivityReport>;

    /**
     * Retrieves reporting data about a team's linked devices.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.DateRangeError>.
     * @param arg The request parameters.
     */
    public teamReportsGetDevices(arg: team.DateRange): Promise<team.GetDevicesReport>;

    /**
     * Retrieves reporting data about a team's membership.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.DateRangeError>.
     * @param arg The request parameters.
     */
    public teamReportsGetMembership(arg: team.DateRange): Promise<team.GetMembershipReport>;

    /**
     * Retrieves reporting data about a team's storage usage.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<team.DateRangeError>.
     * @param arg The request parameters.
     */
    public teamReportsGetStorage(arg: team.DateRange): Promise<team.GetStorageReport>;
  }
}
