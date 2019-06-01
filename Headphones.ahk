#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

Media_Play_Pause::
	if (A_ThisHotkey = A_PriorHotkey && A_TimeSincePriorHotkey < 10)
		return
	Send {Media_Play_Pause}
	return
Media_Next::
	if (A_ThisHotkey = A_PriorHotkey && A_TimeSincePriorHotkey < 10)
		return
	Send {Media_Next}
	return
Media_Prev::
	if (A_ThisHotkey = A_PriorHotkey && A_TimeSincePriorHotkey < 10)
		return
	Send {Media_Prev}
	return
; "C:\Program Files\AutoHotkey\Compiler\Ahk2Exe.exe" /in Headphones.ahk /icon images/ico.ico /out Headphone-Controls.exe