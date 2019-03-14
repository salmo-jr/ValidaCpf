<?php
	if (isset($_POST['ok'])){
		$user = $_POST['username'];
		$pass = $_POST['password'];

		if ($user == 'admin' && $pass == '123321'){
			header('Location: admin.php?user=ze');
		} else {
			$error_msg = "<h2 id='error'>Usuário ou senha incorretos.</h2>";
		}
	}
?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8" />
		<title>Selenium Automation Testing</title>
	</head>
	<body>
		<form method="post">
			<h1>Login</h1>

			<?php
			// EXIBE MENSAGEM DE ERRO
			if (isset($error_msg)) echo $error_msg;
			?>

			<p>
				<label for="username">Username:</label>
				<input type="text" name="username" id="username" />
			</p>
			<p>
				<label for="password">Password:</label>
				<input type="password" name="password" id="password" />
			</p>
			<button type="submit" name="ok">OK</button>
		</form>
	</body>
</html>