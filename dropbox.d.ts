/// <reference path="./dropbox_types.d.ts" />
declare module DropboxTypes {
  class Dropbox extends DropboxBase {
    /**
     * The Dropbox SDK class.
     */
    constructor(options: DropboxOptions);



    /**
     * Disables the access token used to authenticate the call.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public authTokenRevoke(arg: void): Promise<void>;

    /**
     * Returns the metadata for a file or folder. This is an alpha endpoint
     * compatible with the properties API. Note: Metadata for the root folder is
     * unsupported.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.AlphaGetMetadataError>.
     * @param arg The request parameters.
     */
    public filesAlphaGetMetadata(arg: files.AlphaGetMetadataArg): Promise<files.FileMetadataReference|files.FolderMetadataReference|files.DeletedMetadataReference>;

    /**
     * Create a new file with the contents provided in the request. Note that
     * this endpoint is part of the properties API alpha and is slightly
     * different from upload. Do not use this to upload a file larger than 150
     * MB. Instead, create an upload session with upload_session/start.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.UploadErrorWithProperties>.
     * @param arg The request parameters.
     */
    public filesAlphaUpload(arg: files.CommitInfoWithProperties): Promise<files.FileMetadata>;

    /**
     * Copy a file or folder to a different location in the user's Dropbox. If
     * the source path is a folder all its contents will be copied.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.RelocationError>.
     * @param arg The request parameters.
     */
    public filesCopy(arg: files.RelocationArg): Promise<files.FileMetadataReference|files.FolderMetadataReference|files.DeletedMetadataReference>;

    /**
     * Get a copy reference to a file or folder. This reference string can be
     * used to save that file or folder to another user's Dropbox by passing it
     * to copy_reference/save.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.GetCopyReferenceError>.
     * @param arg The request parameters.
     */
    public filesCopyReferenceGet(arg: files.GetCopyReferenceArg): Promise<files.GetCopyReferenceResult>;

    /**
     * Save a copy reference returned by copy_reference/get to the user's
     * Dropbox.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.SaveCopyReferenceError>.
     * @param arg The request parameters.
     */
    public filesCopyReferenceSave(arg: files.SaveCopyReferenceArg): Promise<files.SaveCopyReferenceResult>;

    /**
     * Create a folder at a given path.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.CreateFolderError>.
     * @param arg The request parameters.
     */
    public filesCreateFolder(arg: files.CreateFolderArg): Promise<files.FolderMetadata>;

    /**
     * Delete the file or folder at a given path. If the path is a folder, all
     * its contents will be deleted too. A successful response indicates that
     * the file or folder was deleted. The returned metadata will be the
     * corresponding FileMetadata or FolderMetadata for the item at time of
     * deletion, and not a DeletedMetadata object.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.DeleteError>.
     * @param arg The request parameters.
     */
    public filesDelete(arg: files.DeleteArg): Promise<files.FileMetadataReference|files.FolderMetadataReference|files.DeletedMetadataReference>;

    /**
     * Download a file from a user's Dropbox.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.DownloadError>.
     * @param arg The request parameters.
     */
    public filesDownload(arg: files.DownloadArg): Promise<files.FileMetadata>;

    /**
     * Returns the metadata for a file or folder. Note: Metadata for the root
     * folder is unsupported.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.GetMetadataError>.
     * @param arg The request parameters.
     */
    public filesGetMetadata(arg: files.GetMetadataArg): Promise<files.FileMetadataReference|files.FolderMetadataReference|files.DeletedMetadataReference>;

    /**
     * Get a preview for a file. Currently previews are only generated for the
     * files with  the following extensions: .doc, .docx, .docm, .ppt, .pps,
     * .ppsx, .ppsm, .pptx, .pptm,  .xls, .xlsx, .xlsm, .rtf
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.PreviewError>.
     * @param arg The request parameters.
     */
    public filesGetPreview(arg: files.PreviewArg): Promise<files.FileMetadata>;

    /**
     * Get a temporary link to stream content of a file. This link will expire
     * in four hours and afterwards you will get 410 Gone. Content-Type of the
     * link is determined automatically by the file's mime type.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.GetTemporaryLinkError>.
     * @param arg The request parameters.
     */
    public filesGetTemporaryLink(arg: files.GetTemporaryLinkArg): Promise<files.GetTemporaryLinkResult>;

    /**
     * Get a thumbnail for an image. This method currently supports files with
     * the following file extensions: jpg, jpeg, png, tiff, tif, gif and bmp.
     * Photos that are larger than 20MB in size won't be converted to a
     * thumbnail.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.ThumbnailError>.
     * @param arg The request parameters.
     */
    public filesGetThumbnail(arg: files.ThumbnailArg): Promise<files.FileMetadata>;

    /**
     * Returns the contents of a folder.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.ListFolderError>.
     * @param arg The request parameters.
     */
    public filesListFolder(arg: files.ListFolderArg): Promise<files.ListFolderResult>;

    /**
     * Once a cursor has been retrieved from list_folder, use this to paginate
     * through all files and retrieve updates to the folder.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.ListFolderContinueError>.
     * @param arg The request parameters.
     */
    public filesListFolderContinue(arg: files.ListFolderContinueArg): Promise<files.ListFolderResult>;

    /**
     * A way to quickly get a cursor for the folder's state. Unlike list_folder,
     * list_folder/get_latest_cursor doesn't return any entries. This endpoint
     * is for app which only needs to know about new files and modifications and
     * doesn't need to know about files that already exist in Dropbox.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.ListFolderError>.
     * @param arg The request parameters.
     */
    public filesListFolderGetLatestCursor(arg: files.ListFolderArg): Promise<files.ListFolderGetLatestCursorResult>;

    /**
     * A longpoll endpoint to wait for changes on an account. In conjunction
     * with list_folder/continue, this call gives you a low-latency way to
     * monitor an account for file changes. The connection will block until
     * there are changes available or a timeout occurs. This endpoint is useful
     * mostly for client-side apps. If you're looking for server-side
     * notifications, check out our webhooks documentation
     * https://www.dropbox.com/developers/reference/webhooks.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.ListFolderLongpollError>.
     * @param arg The request parameters.
     */
    public filesListFolderLongpoll(arg: files.ListFolderLongpollArg): Promise<files.ListFolderLongpollResult>;

    /**
     * Return revisions of a file
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.ListRevisionsError>.
     * @param arg The request parameters.
     */
    public filesListRevisions(arg: files.ListRevisionsArg): Promise<files.ListRevisionsResult>;

    /**
     * Move a file or folder to a different location in the user's Dropbox. If
     * the source path is a folder all its contents will be moved.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.RelocationError>.
     * @param arg The request parameters.
     */
    public filesMove(arg: files.RelocationArg): Promise<files.FileMetadataReference|files.FolderMetadataReference|files.DeletedMetadataReference>;

    /**
     * Permanently delete the file or folder at a given path (see
     * https://www.dropbox.com/en/help/40). Note: This endpoint is only
     * available for Dropbox Business apps.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.DeleteError>.
     * @param arg The request parameters.
     */
    public filesPermanentlyDelete(arg: files.DeleteArg): Promise<void>;

    /**
     * Add custom properties to a file using a filled property template. See
     * properties/template/add to create new property templates.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.AddPropertiesError>.
     * @param arg The request parameters.
     */
    public filesPropertiesAdd(arg: files.PropertyGroupWithPath): Promise<void>;

    /**
     * Overwrite custom properties from a specified template associated with a
     * file.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.InvalidPropertyGroupError>.
     * @param arg The request parameters.
     */
    public filesPropertiesOverwrite(arg: files.PropertyGroupWithPath): Promise<void>;

    /**
     * Remove all custom properties from a specified template associated with a
     * file. To remove specific property key value pairs, see properties/update.
     * To update a property template, see properties/template/update. Property
     * templates can't be removed once created.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.RemovePropertiesError>.
     * @param arg The request parameters.
     */
    public filesPropertiesRemove(arg: files.RemovePropertiesArg): Promise<void>;

    /**
     * Get the schema for a specified template.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<properties.PropertyTemplateError>.
     * @param arg The request parameters.
     */
    public filesPropertiesTemplateGet(arg: properties.GetPropertyTemplateArg): Promise<properties.GetPropertyTemplateResult>;

    /**
     * Get the property template identifiers for a user. To get the schema of
     * each template use properties/template/get.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<properties.PropertyTemplateError>.
     * @param arg The request parameters.
     */
    public filesPropertiesTemplateList(arg: void): Promise<properties.ListPropertyTemplateIds>;

    /**
     * Add, update or remove custom properties from a specified template
     * associated with a file. Fields that already exist and not described in
     * the request will not be modified.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.UpdatePropertiesError>.
     * @param arg The request parameters.
     */
    public filesPropertiesUpdate(arg: files.UpdatePropertyGroupArg): Promise<void>;

    /**
     * Restore a file to a specific revision
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.RestoreError>.
     * @param arg The request parameters.
     */
    public filesRestore(arg: files.RestoreArg): Promise<files.FileMetadata>;

    /**
     * Save a specified URL into a file in user's Dropbox. If the given path
     * already exists, the file will be renamed to avoid the conflict (e.g.
     * myfile (1).txt).
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.SaveUrlError>.
     * @param arg The request parameters.
     */
    public filesSaveUrl(arg: files.SaveUrlArg): Promise<files.SaveUrlResult>;

    /**
     * Check the status of a save_url job.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<async.PollError>.
     * @param arg The request parameters.
     */
    public filesSaveUrlCheckJobStatus(arg: async.PollArg): Promise<files.SaveUrlJobStatus>;

    /**
     * Searches for files and folders. Note: Recent changes may not immediately
     * be reflected in search results due to a short delay in indexing.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.SearchError>.
     * @param arg The request parameters.
     */
    public filesSearch(arg: files.SearchArg): Promise<files.SearchResult>;

    /**
     * Create a new file with the contents provided in the request. Do not use
     * this to upload a file larger than 150 MB. Instead, create an upload
     * session with upload_session/start.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.UploadError>.
     * @param arg The request parameters.
     */
    public filesUpload(arg: files.CommitInfo): Promise<files.FileMetadata>;

    /**
     * Append more data to an upload session. A single request should not upload
     * more than 150 MB of file contents.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.UploadSessionLookupError>.
     * @deprecated
     * @param arg The request parameters.
     */
    public filesUploadSessionAppend(arg: files.UploadSessionCursor): Promise<void>;

    /**
     * Append more data to an upload session. When the parameter close is set,
     * this call will close the session. A single request should not upload more
     * than 150 MB of file contents.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.UploadSessionLookupError>.
     * @param arg The request parameters.
     */
    public filesUploadSessionAppendV2(arg: files.UploadSessionAppendArg): Promise<void>;

    /**
     * Finish an upload session and save the uploaded data to the given file
     * path. A single request should not upload more than 150 MB of file
     * contents.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<files.UploadSessionFinishError>.
     * @param arg The request parameters.
     */
    public filesUploadSessionFinish(arg: files.UploadSessionFinishArg): Promise<files.FileMetadata>;

    /**
     * This route helps you commit many files at once into a user's Dropbox. Use
     * upload_session/start and upload_session/append_v2 to upload file
     * contents. We recommend uploading many files in parallel to increase
     * throughput. Once the file contents have been uploaded, rather than
     * calling upload_session/finish, use this route to finish all your upload
     * sessions in a single request. UploadSessionStartArg.close or
     * UploadSessionAppendArg.close needs to be true for last
     * upload_session/start or upload_session/append_v2 call. This route will
     * return job_id immediately and do the async commit job in background. We
     * have another route upload_session/finish_batch/check to check the job
     * status. For the same account, this route should be executed serially.
     * That means you should not start next job before current job finishes.
     * Also we only allow up to 1000 entries in a single request
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public filesUploadSessionFinishBatch(arg: files.UploadSessionFinishBatchArg): Promise<async.LaunchEmptyResult>;

    /**
     * Returns the status of an asynchronous job for
     * upload_session/finish_batch. If success, it returns list of result for
     * each entry
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<async.PollError>.
     * @param arg The request parameters.
     */
    public filesUploadSessionFinishBatchCheck(arg: async.PollArg): Promise<files.UploadSessionFinishBatchJobStatus>;

    /**
     * Upload sessions allow you to upload a single file using multiple
     * requests. This call starts a new upload session with the given data.  You
     * can then use upload_session/append_v2 to add more data and
     * upload_session/finish to save all the data to a file in Dropbox. A single
     * request should not upload more than 150 MB of file contents.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public filesUploadSessionStart(arg: files.UploadSessionStartArg): Promise<files.UploadSessionStartResult>;

    /**
     * Adds specified members to a file.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.AddFileMemberError>.
     * @param arg The request parameters.
     */
    public sharingAddFileMember(arg: sharing.AddFileMemberArgs): Promise<Array<sharing.FileMemberActionResult>>;

    /**
     * Allows an owner or editor (if the ACL update policy allows) of a shared
     * folder to add another member. For the new member to get access to all the
     * functionality for this folder, you will need to call mount_folder on
     * their behalf. Apps must have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.AddFolderMemberError>.
     * @param arg The request parameters.
     */
    public sharingAddFolderMember(arg: sharing.AddFolderMemberArg): Promise<void>;

    /**
     * Changes a member's access on a shared file.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.FileMemberActionError>.
     * @param arg The request parameters.
     */
    public sharingChangeFileMemberAccess(arg: sharing.ChangeFileMemberAccessArgs): Promise<sharing.FileMemberActionResult>;

    /**
     * Returns the status of an asynchronous job. Apps must have full Dropbox
     * access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<async.PollError>.
     * @param arg The request parameters.
     */
    public sharingCheckJobStatus(arg: async.PollArg): Promise<sharing.JobStatus>;

    /**
     * Returns the status of an asynchronous job for sharing a folder. Apps must
     * have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<async.PollError>.
     * @param arg The request parameters.
     */
    public sharingCheckRemoveMemberJobStatus(arg: async.PollArg): Promise<sharing.RemoveMemberJobStatus>;

    /**
     * Returns the status of an asynchronous job for sharing a folder. Apps must
     * have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<async.PollError>.
     * @param arg The request parameters.
     */
    public sharingCheckShareJobStatus(arg: async.PollArg): Promise<sharing.ShareFolderJobStatus>;

    /**
     * Create a shared link. If a shared link already exists for the given path,
     * that link is returned. Note that in the returned PathLinkMetadata, the
     * PathLinkMetadata.url field is the shortened URL if
     * CreateSharedLinkArg.short_url argument is set to true. Previously, it was
     * technically possible to break a shared link by moving or renaming the
     * corresponding file or folder. In the future, this will no longer be the
     * case, so your app shouldn't rely on this behavior. Instead, if your app
     * needs to revoke a shared link, use revoke_shared_link.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.CreateSharedLinkError>.
     * @deprecated
     * @param arg The request parameters.
     */
    public sharingCreateSharedLink(arg: sharing.CreateSharedLinkArg): Promise<sharing.PathLinkMetadata>;

    /**
     * Create a shared link with custom settings. If no settings are given then
     * the default visibility is RequestedVisibility.public (The resolved
     * visibility, though, may depend on other aspects such as team and shared
     * folder settings).
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.CreateSharedLinkWithSettingsError>.
     * @param arg The request parameters.
     */
    public sharingCreateSharedLinkWithSettings(arg: sharing.CreateSharedLinkWithSettingsArg): Promise<sharing.FileLinkMetadataReference|sharing.FolderLinkMetadataReference|sharing.SharedLinkMetadataReference>;

    /**
     * Returns shared file metadata.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.GetFileMetadataError>.
     * @param arg The request parameters.
     */
    public sharingGetFileMetadata(arg: sharing.GetFileMetadataArg): Promise<sharing.SharedFileMetadata>;

    /**
     * Returns shared file metadata.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.SharingUserError>.
     * @param arg The request parameters.
     */
    public sharingGetFileMetadataBatch(arg: sharing.GetFileMetadataBatchArg): Promise<Array<sharing.GetFileMetadataBatchResult>>;

    /**
     * Returns shared folder metadata by its folder ID. Apps must have full
     * Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.SharedFolderAccessError>.
     * @param arg The request parameters.
     */
    public sharingGetFolderMetadata(arg: sharing.GetMetadataArgs): Promise<sharing.SharedFolderMetadata>;

    /**
     * Download the shared link's file from a user's Dropbox.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.GetSharedLinkFileError>.
     * @param arg The request parameters.
     */
    public sharingGetSharedLinkFile(arg: sharing.GetSharedLinkFileArg): Promise<sharing.FileLinkMetadataReference|sharing.FolderLinkMetadataReference|sharing.SharedLinkMetadataReference>;

    /**
     * Get the shared link's metadata.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.SharedLinkError>.
     * @param arg The request parameters.
     */
    public sharingGetSharedLinkMetadata(arg: sharing.GetSharedLinkMetadataArg): Promise<sharing.FileLinkMetadataReference|sharing.FolderLinkMetadataReference|sharing.SharedLinkMetadataReference>;

    /**
     * Returns a list of LinkMetadata objects for this user, including
     * collection links. If no path is given or the path is empty, returns a
     * list of all shared links for the current user, including collection
     * links. If a non-empty path is given, returns a list of all shared links
     * that allow access to the given path.  Collection links are never returned
     * in this case. Note that the url field in the response is never the
     * shortened URL.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.GetSharedLinksError>.
     * @deprecated
     * @param arg The request parameters.
     */
    public sharingGetSharedLinks(arg: sharing.GetSharedLinksArg): Promise<sharing.GetSharedLinksResult>;

    /**
     * Use to obtain the members who have been invited to a file, both inherited
     * and uninherited members.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.ListFileMembersError>.
     * @param arg The request parameters.
     */
    public sharingListFileMembers(arg: sharing.ListFileMembersArg): Promise<sharing.SharedFileMembers>;

    /**
     * Get members of multiple files at once. The arguments to this route are
     * more limited, and the limit on query result size per file is more strict.
     * To customize the results more, use the individual file endpoint.
     * Inherited users are not included in the result, and permissions are not
     * returned for this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.SharingUserError>.
     * @param arg The request parameters.
     */
    public sharingListFileMembersBatch(arg: sharing.ListFileMembersBatchArg): Promise<Array<sharing.ListFileMembersBatchResult>>;

    /**
     * Once a cursor has been retrieved from list_file_members or
     * list_file_members/batch, use this to paginate through all shared file
     * members.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.ListFileMembersContinueError>.
     * @param arg The request parameters.
     */
    public sharingListFileMembersContinue(arg: sharing.ListFileMembersContinueArg): Promise<sharing.SharedFileMembers>;

    /**
     * Returns shared folder membership by its folder ID. Apps must have full
     * Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.SharedFolderAccessError>.
     * @param arg The request parameters.
     */
    public sharingListFolderMembers(arg: sharing.ListFolderMembersArgs): Promise<sharing.SharedFolderMembers>;

    /**
     * Once a cursor has been retrieved from list_folder_members, use this to
     * paginate through all shared folder members. Apps must have full Dropbox
     * access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.ListFolderMembersContinueError>.
     * @param arg The request parameters.
     */
    public sharingListFolderMembersContinue(arg: sharing.ListFolderMembersContinueArg): Promise<sharing.SharedFolderMembers>;

    /**
     * Return the list of all shared folders the current user has access to.
     * Apps must have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public sharingListFolders(arg: sharing.ListFoldersArgs): Promise<sharing.ListFoldersResult>;

    /**
     * Once a cursor has been retrieved from list_folders, use this to paginate
     * through all shared folders. The cursor must come from a previous call to
     * list_folders or list_folders/continue. Apps must have full Dropbox access
     * to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.ListFoldersContinueError>.
     * @param arg The request parameters.
     */
    public sharingListFoldersContinue(arg: sharing.ListFoldersContinueArg): Promise<sharing.ListFoldersResult>;

    /**
     * Return the list of all shared folders the current user can mount or
     * unmount. Apps must have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public sharingListMountableFolders(arg: sharing.ListFoldersArgs): Promise<sharing.ListFoldersResult>;

    /**
     * Once a cursor has been retrieved from list_mountable_folders, use this to
     * paginate through all mountable shared folders. The cursor must come from
     * a previous call to list_mountable_folders or
     * list_mountable_folders/continue. Apps must have full Dropbox access to
     * use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.ListFoldersContinueError>.
     * @param arg The request parameters.
     */
    public sharingListMountableFoldersContinue(arg: sharing.ListFoldersContinueArg): Promise<sharing.ListFoldersResult>;

    /**
     * Returns a list of all files shared with current user.  Does not include
     * files the user has received via shared folders, and does  not include
     * unclaimed invitations.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.SharingUserError>.
     * @param arg The request parameters.
     */
    public sharingListReceivedFiles(arg: sharing.ListFilesArg): Promise<sharing.ListFilesResult>;

    /**
     * Get more results with a cursor from list_received_files.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.ListFilesContinueError>.
     * @param arg The request parameters.
     */
    public sharingListReceivedFilesContinue(arg: sharing.ListFilesContinueArg): Promise<sharing.ListFilesResult>;

    /**
     * List shared links of this user. If no path is given or the path is empty,
     * returns a list of all shared links for the current user. If a non-empty
     * path is given, returns a list of all shared links that allow access to
     * the given path - direct links to the given path and links to parent
     * folders of the given path. Links to parent folders can be suppressed by
     * setting direct_only to true.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.ListSharedLinksError>.
     * @param arg The request parameters.
     */
    public sharingListSharedLinks(arg: sharing.ListSharedLinksArg): Promise<sharing.ListSharedLinksResult>;

    /**
     * Modify the shared link's settings. If the requested visibility conflict
     * with the shared links policy of the team or the shared folder (in case
     * the linked file is part of a shared folder) then the
     * LinkPermissions.resolved_visibility of the returned SharedLinkMetadata
     * will reflect the actual visibility of the shared link and the
     * LinkPermissions.requested_visibility will reflect the requested
     * visibility.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.ModifySharedLinkSettingsError>.
     * @param arg The request parameters.
     */
    public sharingModifySharedLinkSettings(arg: sharing.ModifySharedLinkSettingsArgs): Promise<sharing.FileLinkMetadataReference|sharing.FolderLinkMetadataReference|sharing.SharedLinkMetadataReference>;

    /**
     * The current user mounts the designated folder. Mount a shared folder for
     * a user after they have been added as a member. Once mounted, the shared
     * folder will appear in their Dropbox. Apps must have full Dropbox access
     * to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.MountFolderError>.
     * @param arg The request parameters.
     */
    public sharingMountFolder(arg: sharing.MountFolderArg): Promise<sharing.SharedFolderMetadata>;

    /**
     * The current user relinquishes their membership in the designated file.
     * Note that the current user may still have inherited access to this file
     * through the parent folder. Apps must have full Dropbox access to use this
     * endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.RelinquishFileMembershipError>.
     * @param arg The request parameters.
     */
    public sharingRelinquishFileMembership(arg: sharing.RelinquishFileMembershipArg): Promise<void>;

    /**
     * The current user relinquishes their membership in the designated shared
     * folder and will no longer have access to the folder.  A folder owner
     * cannot relinquish membership in their own folder. This will run
     * synchronously if leave_a_copy is false, and asynchronously if
     * leave_a_copy is true. Apps must have full Dropbox access to use this
     * endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.RelinquishFolderMembershipError>.
     * @param arg The request parameters.
     */
    public sharingRelinquishFolderMembership(arg: sharing.RelinquishFolderMembershipArg): Promise<async.LaunchEmptyResult>;

    /**
     * Identical to remove_file_member_2 but with less information returned.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.RemoveFileMemberError>.
     * @deprecated
     * @param arg The request parameters.
     */
    public sharingRemoveFileMember(arg: sharing.RemoveFileMemberArg): Promise<sharing.FileMemberActionIndividualResult>;

    /**
     * Removes a specified member from the file.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.RemoveFileMemberError>.
     * @param arg The request parameters.
     */
    public sharingRemoveFileMember2(arg: sharing.RemoveFileMemberArg): Promise<sharing.FileMemberRemoveActionResult>;

    /**
     * Allows an owner or editor (if the ACL update policy allows) of a shared
     * folder to remove another member. Apps must have full Dropbox access to
     * use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.RemoveFolderMemberError>.
     * @param arg The request parameters.
     */
    public sharingRemoveFolderMember(arg: sharing.RemoveFolderMemberArg): Promise<async.LaunchResultBase>;

    /**
     * Revoke a shared link. Note that even after revoking a shared link to a
     * file, the file may be accessible if there are shared links leading to any
     * of the file parent folders. To list all shared links that enable access
     * to a specific file, you can use the list_shared_links with the file as
     * the ListSharedLinksArg.path argument.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.RevokeSharedLinkError>.
     * @param arg The request parameters.
     */
    public sharingRevokeSharedLink(arg: sharing.RevokeSharedLinkArg): Promise<void>;

    /**
     * Share a folder with collaborators. Most sharing will be completed
     * synchronously. Large folders will be completed asynchronously. To make
     * testing the async case repeatable, set `ShareFolderArg.force_async`. If a
     * ShareFolderLaunch.async_job_id is returned, you'll need to call
     * check_share_job_status until the action completes to get the metadata for
     * the folder. Apps must have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.ShareFolderError>.
     * @param arg The request parameters.
     */
    public sharingShareFolder(arg: sharing.ShareFolderArg): Promise<sharing.ShareFolderLaunch>;

    /**
     * Transfer ownership of a shared folder to a member of the shared folder.
     * User must have AccessLevel.owner access to the shared folder to perform a
     * transfer. Apps must have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.TransferFolderError>.
     * @param arg The request parameters.
     */
    public sharingTransferFolder(arg: sharing.TransferFolderArg): Promise<void>;

    /**
     * The current user unmounts the designated folder. They can re-mount the
     * folder at a later time using mount_folder. Apps must have full Dropbox
     * access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.UnmountFolderError>.
     * @param arg The request parameters.
     */
    public sharingUnmountFolder(arg: sharing.UnmountFolderArg): Promise<void>;

    /**
     * Remove all members from this file. Does not remove inherited members.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.UnshareFileError>.
     * @param arg The request parameters.
     */
    public sharingUnshareFile(arg: sharing.UnshareFileArg): Promise<void>;

    /**
     * Allows a shared folder owner to unshare the folder. You'll need to call
     * check_job_status to determine if the action has completed successfully.
     * Apps must have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.UnshareFolderError>.
     * @param arg The request parameters.
     */
    public sharingUnshareFolder(arg: sharing.UnshareFolderArg): Promise<async.LaunchEmptyResult>;

    /**
     * Allows an owner or editor of a shared folder to update another member's
     * permissions. Apps must have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.UpdateFolderMemberError>.
     * @param arg The request parameters.
     */
    public sharingUpdateFolderMember(arg: sharing.UpdateFolderMemberArg): Promise<sharing.MemberAccessLevelResult>;

    /**
     * Update the sharing policies for a shared folder. User must have
     * AccessLevel.owner access to the shared folder to update its policies.
     * Apps must have full Dropbox access to use this endpoint.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<sharing.UpdateFolderPolicyError>.
     * @param arg The request parameters.
     */
    public sharingUpdateFolderPolicy(arg: sharing.UpdateFolderPolicyArg): Promise<sharing.SharedFolderMetadata>;

    /**
     * Get information about a user's account.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<users.GetAccountError>.
     * @param arg The request parameters.
     */
    public usersGetAccount(arg: users.GetAccountArg): Promise<users.BasicAccount>;

    /**
     * Get information about multiple user accounts.  At most 300 accounts may
     * be queried per request.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<users.GetAccountBatchError>.
     * @param arg The request parameters.
     */
    public usersGetAccountBatch(arg: users.GetAccountBatchArg): Promise<users.GetAccountBatchResult>;

    /**
     * Get information about the current user's account.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public usersGetCurrentAccount(arg: void): Promise<users.FullAccount>;

    /**
     * Get the space usage information for the current user's account.
     * 
     * When an error occurs, the route rejects the promise with type
     * Error<void>.
     * @param arg The request parameters.
     */
    public usersGetSpaceUsage(arg: void): Promise<users.SpaceUsage>;
  }
}
