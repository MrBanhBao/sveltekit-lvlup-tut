<h1>Contacts</h1>

<form method="POST">
    <label>
        Name: <input type="text" required name="name" id="name"/> 
    </label>

    <label>
        e-Mail: <input type="email" required name="email" id="email"/> 
    </label>

    <label>
        Message: <textarea required name="message" id="message"/> 
    </label>

    <button type="submit">Send email</button>
</form>

<style>
    form {
        padding: 20px;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
    label {
        display: block;
    }
</style>